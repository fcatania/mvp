import React from 'react';
import './Answered.css';

const Answered = ({ correctly, onNextClick, finished }) => {
  return (
    <div className="Answered">
      {correctly ? <div className="Answered-correctly">CORRECT</div> : <div className="Answered-incorrectly">INCORRECT</div>}
      {!finished && <button className="Answered-button" onClick={onNextClick}>NEXT</button>}
    </div>
  );
};

export default Answered;