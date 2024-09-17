
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../public/css/usercard.css';


function McqsCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false); // Reset flip state when navigating
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false); // Reset flip state when navigating
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

    // cards from database through server
    const location = useLocation();
    const navigate = useNavigate();
  
  
    const arrCards = location.state || null;
  
    useEffect(() => {
      // If no data is available, redirect to an error page or the home page
      if (arrCards == null) {
        navigate('/error');
      }
    }, [arrCards, navigate]);
    if (arrCards == null) return null;
  
    const cards = arrCards.data;

  return (

    <div className='page'>
    <div className="card-carousel">
        <div>
            <p> {currentIndex + 1 }/{cards.length}</p>
        </div>
      <div className={`mcqcard card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-face card-front">
          <p>{cards[currentIndex].Question} ?</p>
          <ul className="options-list">
            <li><p>A. {cards[currentIndex].ChooseA}</p></li>
            <li><p>B. {cards[currentIndex].ChooseB}</p></li>
            <li><p>C. {cards[currentIndex].ChooseC}</p></li>
            <li><p>D. {cards[currentIndex].ChooseD}</p></li>
          </ul>
        </div>
        <div className="card-face card-back">
          <span>Answer:</span>
          <p>{cards[currentIndex].answerOption}. {cards[currentIndex].ans}</p>
        </div>
      </div>
      <div className="controls">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={handleFlip} >
          Flip
        </button>
        <button onClick={handleNext} disabled={currentIndex === cards.length - 1}>
          Next
        </button>
      </div>
    </div>
    </div>
  );
}

export default McqsCards;
