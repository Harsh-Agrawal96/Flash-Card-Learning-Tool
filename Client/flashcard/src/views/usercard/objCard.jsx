
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../public/css/usercard.css';


function ObjCards() {

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
        <div className="count_head"> 
            <p> {currentIndex + 1 }/{cards.length}</p>
        </div>
      <div className={`card ${isFlipped ? 'flipped' : ''}`} >
        <div className="card-face card-front">
            <div>
                <p>{cards[currentIndex].Question}?</p>
            </div>
        </div>
        <div className="card-face card-back">
            <div>
                <span>Answer:</span>
            </div>
            <div>
                <p>{cards[currentIndex].Answer}</p>
            </div>
            </div>
      </div>
      <div className="controls">
        <button onClick={handlePrevious} disabled={currentIndex == 0}>
          Previous
        </button>
        <button onClick={handleFlip} >
          Flip
        </button>
        <button onClick={handleNext} disabled={currentIndex == cards.length - 1}>
          Next
        </button>
      </div>
    </div>

</div>

  );
}

export default ObjCards;
