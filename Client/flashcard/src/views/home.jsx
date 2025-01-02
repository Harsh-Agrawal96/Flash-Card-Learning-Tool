
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './../public/css/home.css';
import { showCardQuery } from '../backendApicall/showCard.js';
import { unknownError as Err } from '../utils/responses.js';
import MessageDisplay from './partials/responseMessage.jsx';


function HomePage() {

  const location = useLocation();
  const { message, type } = location.state || {};
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);

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
      { location.state?.message && ( 
        <MessageDisplay iniMessage={message} iniMessageType={type} />
      )}
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
                disabled = { (!selectedType || ! selectedValue || isLoading ) }
            >{isLoading ? 'Loading...' : 'Show cards'}</button>  

        </div>
    </div>
  );
}

export default HomePage;
