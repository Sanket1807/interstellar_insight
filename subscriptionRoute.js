const express = require('express');
const Subscription = require('./SubscriptionModel');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, name } = req.body;

  try {
    const existingSubscription = await Subscription.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ message: 'Email is already subscribed' });
    }

    const newSubscription = new Subscription({ email, name });
    await newSubscription.save();

    const subject = 'Subscription Confirmation';
    const text = `Hello ${name},\n\nThank you for subscribing to our newsletter!`;
    await transporter.sendMail({
      from: 'sanketsheth3237@gmail.com',
      to: email,
      subject: subject,
      text: text,
    });

    res.status(200).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error('Error during subscription:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
