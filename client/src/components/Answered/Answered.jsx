import React from 'react';
import './Answered.css';

const Answered = ({ correctly, onNextClick, finished }) => {
  return (
    <div className="Answered">
      {correctly ? <div className="Answered-correctly"><b>CORRECT</b></div> : <div className="Answered-incorrectly"><b>INCORRECT</b></div>}
      {!finished && <button className="Answered-button" onClick={onNextClick}>NEXT</button>}
    </div>
  );
};

export default Answered;