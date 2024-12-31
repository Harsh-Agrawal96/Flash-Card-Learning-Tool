import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import '../public/css/login.css';
import { loginQuery } from '../backendApicall/verify';
import { unknownError as Err } from '../utils/responses';


const LoginForm = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if ( token && userDetails) {
      navigate('/profile');
    }
  }, [navigate]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [key, setKey] = useState('');

  const handleSubmit = async (e) => {
    try{
      e.preventDefault();
      const formData = { email, password, key };

      const resData = await loginQuery(formData);
      const data = resData.data;

      localStorage.setItem('token', data.token);
      localStorage.setItem('userDetails', JSON.stringify(data.userDetails));

      navigate('/', { state : { message : data.msg, type : 'success'} });
    }catch(err){
      let errorMessages = [];
      try {
        errorMessages = JSON.parse(err.message);
      } catch {
        errorMessages = Err;
      }
      navigate('/',{ state : { message : errorMessages, type : 'error'} } );
    }
  };


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="securityKey">Key:</label>
          <input
            type="number"
            name="key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
