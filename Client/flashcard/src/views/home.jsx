
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './../public/css/home.css';
import { showCardQuery } from '../backendApicall/showCard.js';
import { unknownError as Err } from '../utils/responses.js';
import MessageDisplay from './partials/responseMessage.jsx';

const cards = [
  "Card 1: This is the first card.",
  "Card 2: This is the second card.",
  "Card 3: This is the third card.",
  "Card 4: This is the fourth card.",
  "Card 5: This is the fifth card."
];

function HomePage() {

  const location = useLocation();
  const { message, type } = location.state || {};

  const [selectedValue, setSelectedValue] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleChangeType = (e) => {
    setSelectedType(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = { selectedType,selectedValue };
  
      const resData = await showCardQuery(formData);

      if( formData.selectedType == 2 ){
        navigate('/card/objective', { state: { data: resData.msg, type : 'success' } });
      }else{
        navigate('/card/mcq', { state: { data: resData.msg, type : 'success' } });
      }
    } catch (err) {
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

    <div className='container'>
      <MessageDisplay/>
      <div>
            {message && (
                <div
                    style={{
                        padding: '10px',
                        marginBottom: '15px',
                        borderRadius: '5px',
                        color: type === 'success' ? '#155724' : '#721c24',
                        backgroundColor: type === 'success' ? '#d4edda' : '#f8d7da',
                        border: `1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                    }}
                >
                    {message}
                </div>
            )}
        </div>
        <div className="inner_container">

            <p>Select card numbers and question type</p>

            <select className="card_numbers" value={selectedValue} onChange={handleChange}>
            <option value="" disabled>Select options</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            </select>

            <br />

            <select className="card_numbers" value={selectedType} onChange={handleChangeType}>
            <option value="" disabled>Select options</option>
            <option value="1">Mcqa type questions</option>
            <option value="2">objective type questins</option>
            </select>

            <br />

            {selectedType && (
                <div className="result">
                  <p>
                      you selected {selectedValue} cards of { selectedType == 1 ? <span className='questype'>mcqs</span> : <span></span> }{ selectedType == 2 ? <span className='questype'>objective</span> : <span></span> } type 
question
                  </p>
                </div>
            )}

            <button className="submit-btn" onClick={handleSubmit}
                disabled = { (!selectedType || ! selectedValue) }
            >Show cards</button>  

        </div>
    </div>
  );
}

export default HomePage;
