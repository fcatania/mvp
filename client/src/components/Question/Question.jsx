import React from 'react';
import './Question.css';

const Question = ({ title, options, correct_index, onOptionClick }) => {
  return (
    <div className="Question">
      <div className="Question-title"><b>{title}</b></div> 
      <button className="Question-option" onClick={(e) => {onOptionClick(0)}}>{options[0]}</button>
      <button className="Question-option" onClick={(e) => {onOptionClick(1)}}>{options[1]}</button>
      <button className="Question-option" onClick={(e) => {onOptionClick(2)}}>{options[2]}</button>
      <button className="Question-option" onClick={(e) => {onOptionClick(3)}}>{options[3]}</button>
    </div>
  );
}

export default Question;