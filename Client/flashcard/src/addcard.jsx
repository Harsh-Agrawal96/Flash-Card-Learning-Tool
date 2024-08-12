import React, { useState } from 'react';
import './addcard.css'; // Import the CSS file
import { addingcardtodb } from './apiIntereaction';

function AddCardForm() {
  const [formData, setFormData] = useState({
    question: '',
    answer: ''
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let ans = formData.answer;
    let que = formData.question

    const data = { ans, que };

    await addingcardtodb(data);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          id="question"
          name="question"
          value={formData.question}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="answer">Answer:</label>
        <input
          type="text"
          id="answer"
          name="answer"
          value={formData.answer}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default AddCardForm;
