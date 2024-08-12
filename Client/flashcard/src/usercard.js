import React from 'react';
import ReactDOM from 'react-dom';
import CardCarousel from './CardCarousel';

const cards = [
  "Card 1: This is the first card.",
  "Card 2: This is the second card.",
  "Card 3: This is the third card.",
  "Card 4: This is the fourth card.",
  "Card 5: This is the fifth card."
];

ReactDOM.render(<CardCarousel cards={cards} />, document.getElementById('root'));
