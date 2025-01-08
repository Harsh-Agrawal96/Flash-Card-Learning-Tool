import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../public/css/partials/header.css';
import LogoImg from "../../public/images/logo.png";
import Avatar from "../../public/images/avatar.jpg";

const Header = () => {
 
    const navigate = useNavigate();
    const [islog, setIsLog] = useState(false);

    useEffect( ()=> {
        const token = localStorage.getItem('token');
        const userDetails = JSON.parse(localStorage.getItem('userDetails'))

        if( token && userDetails ){
            setIsLog(true);
        }
    })

    let handleLogout = () => {
        
        localStorage.removeItem('token');
        localStorage.removeItem('userDetails');

        navigate('/', { state: { message: ['Logged out successfully!'], type: 'success' } });
    }

    return (
        <header className="header">
            <div className="header-container">
                <a className="header-logo" href="/">
                    <img src={LogoImg} alt="Left Logo" className="left-logo" />
                </a>
  
                { islog && (
                    <div className="header-nav">
                        <a className="header-link" href="/profile">
                            <img src={Avatar} alt="Profile" className="profile-image" />
                        </a>
                        <button className="logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
  };

export default Header;