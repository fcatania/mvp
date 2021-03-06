import React from 'react';
import './TriviaPage.css';
import Question from '../Question/Question.jsx';
import Answered from '../Answered/Answered.jsx';
import Finished from '../Finished/Finished.jsx';

class TriviaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: props.questions[0],
      remaining: props.questions.length,
      total: props.questions.length,
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
    this.setState({
      answered: false,
      correct: false,
      currentQuestion: this.props.questions[newQuestionIndex]
    })
  }

  render() {
    return (
      <div className="TriviaPage">
        <span>Remaining: {this.state.remaining}</span>
        <div className="TriviaPage-question-container">
          {this.state.currentQuestion !== null && <Question {...this.state.currentQuestion} onOptionClick={this.onOptionClick.bind(this)}/>}
        </div>
        {this.state.answered && <Answered correctly={this.state.correct} onNextClick={this.onNextClick.bind(this)} finished={this.state.finished}/>}
        {this.state.finished && <Finished score={this.state.score} total={this.state.total}/>}
      </div>
    );
  }
}
  
export default TriviaPage;