import React from 'react';
import './TriviaPage.css';
import Question from '../Question/Question.jsx';
import Answered from '../Answered/Answered.jsx';

let dummyQuestions = [
  {title: 'How do you say code?', options: ['codego', 'códego', 'codigo', 'código'], correct_index: 3},
  {title: 'How do you say variable?', options: ['variable', 'váriable', 'varioble', 'varieble'], correct_index: 0},
  {title: 'How do you say function?', options: ['funcion', 'funciona', 'función', 'funciono'], correct_index: 2},
  {title: 'How do you say constant?', options: ['constant', 'constanti', 'constanto', 'constante'], correct_index: 3},
  {title: 'How do you say development?', options: ['desarrollador', 'desrollo', 'desarrollo', 'désrrollo'], correct_index: 2},
  {title: 'How do you say developer?', options: ['desarrollador', 'desrollodor', 'desarrollo', 'desarrollado'], correct_index: 0}
];

class TriviaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questions: dummyQuestions,
      currentQuestion: dummyQuestions[0],
      remaining: dummyQuestions.length,
      total: dummyQuestions.length,
      score: 0,
      answered: false,
      correct: false,
      finished: false
    };
  }

  onOptionClick(index) {
    if (!this.state.answered) {
      let newRemaining = this.state.remaining - 1;
      let newScore = this.state.currentQuestion.correct_index === index ? this.state.score + 1 : this.state.score;
      let newFinished = (newRemaining === 0);
      let newCorrect = this.state.score !== newScore;
      this.setState({remaining: newRemaining,
        score: newScore,
        finished: newFinished,
        answered: true,
        correct: newCorrect
      });
    }
  }

  onNextClick() {
    let newQuestionIndex = this.state.total - this.state.remaining;
    console.log('Next question is: ' + this.state.questions[newQuestionIndex].title);
    this.setState({
      answered: false,
      correct: false,
      currentQuestion: this.state.questions[newQuestionIndex]
    })
  }

  render() {
    return (
      <div className="TriviaPage">
        <span>Remaining: {this.state.remaining}</span>
        <div className="TriviaPage-question-container">
          <Question {...this.state.currentQuestion} onOptionClick={this.onOptionClick.bind(this)}/>
        </div>
        {this.state.answered && <Answered correctly={this.state.correct} onNextClick={this.onNextClick.bind(this)} finished={this.state.finished}/>}
        {this.state.finished && <span>FINISHED,  you scored: {this.state.score} out of {this.state.total}</span>}
      </div>
    );
  }
}
  
export default TriviaPage;