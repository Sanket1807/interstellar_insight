const express = require('express');
const mongoose = require('mongoose');
const SignUp = require('./SignUpModel');
const QuizScore = require('./QuizScoreModel');
const Subscription = require('./SubscriptionModel');
const Event = require('./AddEventModel');
const cors = require('cors');
const nodemailer = require('nodemailer');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const bcrypt = require('bcrypt');

const app = express();
const port = 8080;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: 'your_session_secret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/interstellar_insight' }),
  cookie: { secure: false, httpOnly: true }
}));

const dbUrl = 'mongodb://127.0.0.1:27017/interstellar_insight';

mongoose.connect(dbUrl)
  .then(() => console.log('MongoDB connection successful!'))
  .catch(error => console.log(`Unable to connect due to ${error}`));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sanketsheth3237@gmail.com',
    pass: 'cici plxe grkl eazm',
  },
});

const sendEmailToAdmin = async (userData) => {
  try {
    const info = await transporter.sendMail({
      from: 'sanketsheth3237@gmail.com',
      to: 'sanket.sheth114563@marwadiuniversity.ac.in',
      subject: 'New User Sign-Up Request',
      html: `
        <p>A new user has signed up with the following details:</p>
        <ul>
          <li>Username: ${userData.username}</li>
          <li>Email: ${userData.email}</li>
          <li>Phone Number: ${userData.phoneNumber}</li>
          <li>Role: ${userData.role}</li>
        </ul>
        <p>Please approve or reject this request in the admin panel.</p>
      `,
    });
    console.log('Email sent:', info);
  } catch (error) {
    console.error('Error sending email to admin:', error);
  }
};

const requireAuth = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

app.post('/signup', async (req, res) => {
  try {
    const { username, password, email, phoneNumber, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new SignUp({ username, password: hashedPassword, email, phoneNumber, role, approved: false });
    await newUser.save();

    await sendEmailToAdmin(newUser);

    res.status(200).json({ message: 'Sign-up successful! Pending admin approval.' });
  } catch (error) {
    console.error('Error during sign-up:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/pending-approvals', requireAuth, async (req, res) => {
  if (req.session.role !== 'Admin') {
    return res.status(403).json({ error: 'Unauthorized access' });
  }
  
  try {
    const pendingUsers = await SignUp.find({ approved: false });
    res.status(200).json(pendingUsers);
  } catch (error) {
    console.error('Error fetching pending users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/approve-reject-user', requireAuth, async (req, res) => {
  if (req.session.role !== 'Admin') {
    return res.status(403).json({ error: 'Unauthorized access' });
  }

  const { userId, action } = req.body;

  try {
    const user = await SignUp.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (action === 'approve') {
      user.approved = true;
      await user.save();
      res.status(200).json({ message: 'User approved successfully!' });
    } else if (action === 'reject') {
      await SignUp.deleteOne({ _id: userId });
      res.status(200).json({ message: 'User rejected and removed successfully!' });
    } else {
      res.status(400).json({ error: 'Invalid action' });
    }
  } catch (error) {
    console.error('Error during approval/rejection:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await SignUp.findOne({ username });

    if (user) {
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        if (!user.approved) {
          return res.status(403).json({ error: 'Account not approved yet.' });
        }
        req.session.userId = user._id;
        req.session.username = user.username;
        req.session.role = user.role;

        res.status(200).json({
          message: 'Login successful!',
          user: { role: user.role }
        });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Error during logout:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    res.clearCookie('connect.sid');
    res.status(200).json({ message: 'Logout successful!' });
  });
});


app.post('/save-quiz-score', requireAuth, async (req, res) => {
  const { score } = req.body;
  const userId = req.session.userId;
  const username = req.session.username;

  try {
    if (!userId || !username) {
      return res.status(400).json({ error: 'User not logged in or session expired' });
    }

    const newScore = new QuizScore({
      userId,
      username,
      score
    });

    await newScore.save();
    res.status(200).json({ message: 'Score and username saved successfully!' });
  } catch (error) {
    console.error('Error saving quiz score:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/events', async (req, res) => {
  const eventType = req.query.type; 
  try {
    const events = await Event.find({ eventType: eventType }); 
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Contact({
      name,
      email,
      message,
    });

    await newMessage.save();
    res.status(200).json({ message: 'Message saved successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/contact-messages', async (req, res) => {
  try {
      const messages = await Contact.find(); 
      res.json(messages);
  } catch (error) {
      console.error('Error fetching contact messages:', error); 
      res.status(500).json({ error: 'Error fetching contact messages' });
  }
});



app.get('/quiz-scores', async (req, res) => {
  try {
    const scores = await QuizScore.aggregate([
      {
        $group: {
          _id: '$userId',
          username: { $first: '$username' },
          maxScore: { $max: '$score' }
        }
      },
      {
        $sort: { maxScore: -1 }
      },
      {
        $limit: 10
      }
    ]);

    const scoreList = scores.map((score, index) => ({
      rank: index + 1,
      username: score.username,
      score: score.maxScore
    }));

    res.status(200).json(scoreList);
  } catch (error) {
    console.error('Error fetching quiz scores:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/check-admin', (req, res) => {
  if (req.session.role === 'Admin') {
    res.status(200).json({ isAdmin: true });
  } else {
    res.status(200).json({ isAdmin: false });
  }
});

app.post('/add-event', async (req, res) => {
  const { title, date, time, location, description, eventType } = req.body;

  try {
    const newEvent = new Event({
      title,
      date,
      time,
      location,
      description,
      eventType,
    });

    await newEvent.save();
    res.status(200).json({ message: 'Event added successfully!' });
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/subscribe', async (req, res) => {
  const { email, name } = req.body;

  try {
    const existingSubscription = await Subscription.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ message: 'Email is already subscribed' });
    }

    const newSubscription = new Subscription({ email, name });
    await newSubscription.save();

    const subject = 'Subscription Confirmation';
    const text = `Hello ${name},\n\nThank you for subscribing! You will receive updates about our astronomy platform.\n\nBest Regards,\nInterstellar Insight Team`;
    await transporter.sendMail({ to: email, subject, text });

    res.status(201).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error('Error during subscription:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
