const express = require('express');
const cors = require('cors');
const { findAllCards, findAllQuestions, createCards, createQuestions } = require('./database/dbschema.js');

const app = express();

app.use(cors());

app.get('/api/cards', (req, res) => {
  console.log('getting cards');
  findAllCards((err, cards) => {
    res.status(200).json(cards);
  });
});

app.get('/api/questions', (req, res) => {
  console.log('getting questions');
  findAllQuestions((err, questions) => {
    res.status(200).json(questions);
  })
});

let port = process.env.PORT || 2410;

app.listen(port, () => {
  console.log('Example app listening on port ' + port);
});