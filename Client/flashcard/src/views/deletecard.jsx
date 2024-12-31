import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "../public/css/login.css";
import { deleteCardQuery } from '../backendApicall/cardCrud';
import { unknownError as Err, loginError as logErr } from '../utils/responses';

const DeleteCard = () => {

  const [id, setId] = useState('');
  const [key, setKey] = useState('');
  const [questype, setquestype ] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (!token || !userDetails) {
      navigate('/', { state : { message : logErr, type : 'msg'}});
    }
  }, [navigate]);
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));

  const handleSubmit = async (e) => {

    try{
      e.preventDefault();

      const adminId = userDetails.msg._id;
      const formData = { id, key, questype, adminId };

      const resData = await deleteCardQuery(formData);

      navigate('/profile', { state : { message : resData.msg, type : 'success'} });
    }catch(err){
      let errorMessages = [];
      try {
        errorMessages = JSON.parse(err.message);
      } catch {
        errorMessages = Err;
      }
      navigate('/profile',{ state : { message : errorMessages, type : 'error'} } );
    }


  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Delete Card</h2>
        <div className="input-group">
          <label htmlFor="text">enter id:</label>
          <input
            type="text"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="answer">Select question type :</label>
          <select className="card_numbers" name='quesType' value={questype} onChange={(e) => setquestype(e.target.value)}>
            <option value="" disabled>Select</option>
            <option value="1">Mcqa type questions</option>
            <option value="2">objective type questins</option>
          </select>
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
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteCard