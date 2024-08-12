import React, { useState } from 'react';
import './../public/css/home.css';

function HomePage() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = () => {
    alert(`You selected: ${selectedValue}`);
    
  };

  return (

    <div className='container'>
        <div className="inner_container">

            <p>Select card numbers</p>

            <select className="card_numbers" value={selectedValue} onChange={handleChange}>
            <option value="" disabled>Select options</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            </select>

            {selectedValue && (
                <div className="result">
                <p>You selected: <strong>{selectedValue}</strong></p>
                </div>
            )}

            <button className="submit-button" onClick={handleSubmit}
                disabled={!selectedValue} 
            >Show cards</button>     

        </div>
    </div>
  );
}

export default HomePage;
