import React from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import CardsPage from '../CardsPage/CardsPage.jsx';
import TriviaPage from '../TriviaPage/TriviaPage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingCards: true, isShowingTrivia: false, cards: []}
  }

  componentDidMount() {
    fetch('http://127.0.0.1:2410/api/cards').then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error('FETCH NOT OK');
      }
    }).then(json => {
      this.setState({cards: json});
    });
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
        {this.state.isShowingCards && <CardsPage cards={this.state.cards}/>}
        {this.state.isShowingTrivia && <TriviaPage />}
      </div>);
  }
}

export default App;