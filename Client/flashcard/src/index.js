import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import HomePage from './views/home.jsx';
import App from './App';
import LogoImg from "./public/images/logo.png";
import LoginForm from './loginform';
import AddCardForm from './addcard';
import ObjCards from './views/usercard/objCard.jsx';
import McqsCards from './views/usercard/mcqscard.jsx';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
            <div>
                <header>
                    <div class="logo">
                        <img src={LogoImg} alt='ok'/>
                    </div>
                </header>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/card/objective" element={<ObjCards />} />
                    <Route path="/card/mcq" element={<McqsCards />} />
                    <Route path="/add" element={<AddCardForm />} />
                    <Route path='/login' element={< LoginForm/>} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
                <footer>
                    <div class="fotter_para">
                        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
                    </div>
                </footer>
            </div>
            
        </Router>
);

reportWebVitals();

