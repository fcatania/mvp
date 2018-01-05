const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/spanish-padawan');


let cardSchema = new Schema({
  title: String,
  exact_translation: String,
  example: String,
  example_meaning: String
});

let questionSchema = new Schema({
  title: String,
  options: [String],
  correct_index: Number
});

let Card = mongoose.model('Card', cardSchema);
let Question = mongoose.model('Question', questionSchema);

exports.findAllCards = (cb) => {
  Card.find((err, cards) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, cards);
    }
  })
};

exports.findAllQuestions = (cb) => {
  Question.find((err, cards) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, cards);
    }
  })
};

exports.createCards = (cards, cb) => {
  Card.create(cards, cb);
};

exports.createQuestions = (questions, cb) => {
  Question.create(questions, cb);
};