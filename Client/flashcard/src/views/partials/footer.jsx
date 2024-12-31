import React, { useEffect, useState } from 'react';
import '../../public/css/partials/footer.css';


const Footer = () => {

    const [islog, setIsLog] = useState(false);
    
    useEffect( ()=> {
        const token = localStorage.getItem('token');
        const userDetails = JSON.parse(localStorage.getItem('userDetails'))

        if( !token && !userDetails ){
            setIsLog(true);
        }
    })

    return (
      <footer className="footer">
        <div className="footer-container">
            { islog && <a className="footer-link" href="/">Home</a> }
  
            <p className="footer-text">&copy; 2024 MyWebsite. All rights reserved.</p>
  
            { islog && <a className="footer-link" href="/login">Admin Login</a> }
        </div>
      </footer>
    );
  };


  export default Footer;