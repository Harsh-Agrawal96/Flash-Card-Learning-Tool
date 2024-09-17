
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../public/css/home.css';
import { SendCardQuery } from '../backendApicall/querycard.js';

const cards = [
  "Card 1: This is the first card.",
  "Card 2: This is the second card.",
  "Card 3: This is the third card.",
  "Card 4: This is the fourth card.",
  "Card 5: This is the fifth card."
];

function HomePage() {

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
    e.preventDefault();

    const formData = { selectedType,selectedValue };

    // await SendCardQuery(formData);

    try {

        console.log( "data is " , formData);
        const response = await fetch('https://flash-card-learning-tool.vercel.app/give/cards', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const resData = await response.json();
        const cards = resData.data;

        if (response.ok) {
          console.log('Response:', resData);
        } else {
          navigate('/');
        }
        if( formData.selectedType == 2 ){
          navigate('/card/objective', { state: { data: cards } });
        }else{
          navigate('/card/mcq', { state: { data: cards } });
        }
      } catch (error) {
        alert('An error occurred: ' + error.message);
      }
    
  };

  return (

    <div className='container'>
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
