const express = require('express');
const cors = require('cors');

const app = express();

const dummyCards = [
  {title: 'code', exact_translation: 'código', example: 'Yo escribo código.', example_meaning: 'I write code.'},
  {title: 'variable', exact_translation: 'variable', example: 'Definí una variable.', example_meaning: 'I defined a variable.'},
  {title: 'function', exact_translation: 'función', example: 'Esto es una función.', example_meaning: 'This is a function.'},
  {title: 'constant', exact_translation: 'constante', example: 'No puedo modificar constantes.', example_meaning: 'I can\'t modify constants.'},
  {title: 'development', exact_translation: 'desarrollo', example: 'Me gusta el desarrollo web.', example_meaning: 'I like web development.'},
  {title: 'developer', exact_translation: 'desarrollador', example: 'Soy un desarrollador web.', example_meaning: 'I\'m a web developer.'}
];

const dummyQuestions = [
  {title: 'How do you say code?', options: ['codego', 'códego', 'codigo', 'código'], correct_index: 3},
  {title: 'How do you say variable?', options: ['variable', 'váriable', 'varioble', 'varieble'], correct_index: 0},
  {title: 'How do you say function?', options: ['funcion', 'funciona', 'función', 'funciono'], correct_index: 2},
  {title: 'How do you say constant?', options: ['constant', 'constanti', 'constanto', 'constante'], correct_index: 3},
  {title: 'How do you say development?', options: ['desarrollador', 'desrollo', 'desarrollo', 'désrrollo'], correct_index: 2},
  {title: 'How do you say developer?', options: ['desarrollador', 'desrollodor', 'desarrollo', 'desarrollado'], correct_index: 0}
];

app.use(cors());

app.get('/api/cards', (req, res) => {
  res.status(200).json(dummyCards);
});

app.get('/api/questions', (req, res) => {
  res.status(200).json(dummyQuestions);
});

let port = process.env.PORT || 2410; // for theoretical deployment

app.listen(port, () => {
  console.log('Example app listening on port ' + port);
});