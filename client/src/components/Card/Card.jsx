import React from 'react';
import './Card.css';

const Card = ({ title, exact_translation, example, example_meaning }) => {
  return (
    <div className="Card">
      <div>{title}</div>
      <div>{`Exact translation: ${exact_translation}`}</div>
      <div>{`Example: ${example}`}</div>
      <div>{`Example meaning: ${example_meaning}`}</div>
    </div>
  );
}
  
export default Card;