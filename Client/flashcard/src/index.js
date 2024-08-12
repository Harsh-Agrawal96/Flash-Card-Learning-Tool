import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './views/home.jsx';
import App from './App';
import LoginForm from './loginform';
import AddCardForm from './addcard';
import CardCarousel from './usercard.jsx';
import reportWebVitals from './reportWebVitals';


const cards = [
  "Card 1: This is the first card.",
  "Card 2: This is the second card.",
  "Card 3: This is the third card.",
  "Card 4: This is the fourth card.",
  "Card 5: This is the fifth card."
];



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <HomePage />
  </div>
);

reportWebVitals();

