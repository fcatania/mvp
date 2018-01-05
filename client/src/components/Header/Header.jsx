import React from 'react';
import './Header.css';

const Header = ({ isShowingCards, isShowingTrivia, onClickCards, onClickTrivia }) => {
  return (
    <div>
      <div className="Header">
        <span className="Header-title">Spanish Padawan</span>
        <span>
          <button className={isShowingCards ? "Header-button selected" : "Header-button"} onClick={onClickCards}>Cards</button>
          <button className={isShowingTrivia ? "Header-button selected" : "Header-button"} onClick={onClickTrivia}>Trivia</button>
        </span>
      </div>
      <div className="Header-divider"></div>
    </div>);
}

export default Header;