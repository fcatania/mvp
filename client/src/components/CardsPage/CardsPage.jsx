import React from 'react';
import './CardsPage.css';
import Card from '../Card/Card.jsx';

const CardsPage = ({ cards }) => {
  return (
    <div className="CardsPage">
      {cards.map((card, index) => (<Card {...card} key={index}/>))}
    </div>
  );
}

export default CardsPage;