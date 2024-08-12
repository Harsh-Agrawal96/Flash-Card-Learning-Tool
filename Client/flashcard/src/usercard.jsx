import React, { useState } from 'react';
import './usercard.css';

function CardCarousel({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="card">
        {cards[currentIndex]}
      </div>
      <div className="navigation-buttons">
        <button onClick={goToPrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={goToNext} disabled={currentIndex === cards.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CardCarousel;
