const mongoose = require('mongoose');

const quizScoreSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  username: { type: String, required: true }, 
  score: { type: Number, required: true },
}, { timestamps: true });

const QuizScore = mongoose.model('QuizScore', quizScoreSchema);

module.exports = QuizScore;
