import React from 'react';
import './App.css';
import Header from '../Header/Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingCards: true, isShowingTrivia: false}
  }

  onClickCardsHandler() {
    if (!this.state.isShowingCards) {
      this.setState({isShowingCards: true, isShowingTrivia: false});
    }
  }

  onClickTriviaHandler() {
    if (!this.state.isShowingTrivia) {
      this.setState({isShowingCards: false, isShowingTrivia: true});
    }
  }

  render() {
    return (
      <div className="App">
        <Header isShowingCards={this.state.isShowingCards} isShowingTrivia={this.state.isShowingTrivia} onClickCards={this.onClickCardsHandler.bind(this)} onClickTrivia={this.onClickTriviaHandler.bind(this)}/>
      </div>);
  }
}

export default App;