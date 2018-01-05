import React from 'react';
import './Finished.css';

const Finished = ({ score, total }) => {
  return (
    <div className="Finished">
      <div className="Finished-title"><b>FINISHED</b></div>
      <div className="Finished-subtitle">You scored:</div>
      <div className="Finished-score">{score}<b> / </b>{total}</div>
    </div>
  );
};

export default Finished;