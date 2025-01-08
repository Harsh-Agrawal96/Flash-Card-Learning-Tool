import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import HomePage from './views/home.jsx';
import LoginForm from './views/login.jsx';
import ObjCards from './views/usercard/objCard.jsx';
import McqsCards from './views/usercard/mcqscard.jsx';
import AdminProfile from './views/admin.jsx';
import DeleteCard from './views/deletecard.jsx';
import UpdateCard from './views/updatecard.jsx';
import AddCardForm from './views/addcard.jsx';
import reportWebVitals from './reportWebVitals';
import Header from './views/partials/navbar.jsx';
import Footer from './views/partials/footer.jsx';
import AllCards from "./views/allcard.jsx";
import NotFound from './views/notFound.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/card/objective" element={<ObjCards />} />
                    <Route path="/card/mcq" element={<McqsCards />} />
                    <Route path='/login' element={< LoginForm/>} />
                    <Route path="/profile" element={<AdminProfile />} />
                    <Route path="/allcards" element={<AllCards />} />
                    <Route path="/delete-card" element={<DeleteCard />} />
                    <Route path="/create-card" element={<AddCardForm />} />
                    <Route path="/update-card" element={<UpdateCard />} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
                < Footer />
            </div>

            
        </Router>
);

reportWebVitals();

