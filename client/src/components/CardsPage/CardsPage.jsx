import React from 'react';
import './CardsPage.css';
import Card from '../Card/Card.jsx';

const CardsPage = ({ cards }) => {
  return (
    <div className="CardsPage">
      {cards.map(card => (<Card {...card}/>))}
    </div>
  );
}

export default CardsPage;