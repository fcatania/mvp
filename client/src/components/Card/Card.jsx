import React from 'react';
import './Card.css';

const Card = ({ title, exact_translation, example, example_meaning }) => {
  return (
    <div className="Card">
      <div className="Card-title"><b>{title}</b></div>
      <div className="Card-content"><b>Exact translation: </b>{exact_translation}</div>
      <div className="Card-content"><b>Example: </b>{example}</div>
      <div className="Card-content"><b>Example meaning: </b>{example_meaning}</div>
    </div>
  );
}
  
export default Card;