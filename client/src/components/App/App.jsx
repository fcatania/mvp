import React from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import CardsPage from '../CardsPage/CardsPage.jsx';
import TriviaPage from '../TriviaPage/TriviaPage.jsx';

let dummyCards = [
  {title: 'code', exact_translation: 'código', example: 'Yo escribo código.', example_meaning: 'I write code.'},
  {title: 'variable', exact_translation: 'variable', example: 'Definí una variable.', example_meaning: 'I defined a variable.'},
  {title: 'function', exact_translation: 'función', example: 'Esto es una función.', example_meaning: 'This is a function.'},
  {title: 'constant', exact_translation: 'constante', example: 'No puedo modificar constantes.', example_meaning: 'I can\'t modify constants.'}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingCards: true, isShowingTrivia: false, cards: dummyCards}
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