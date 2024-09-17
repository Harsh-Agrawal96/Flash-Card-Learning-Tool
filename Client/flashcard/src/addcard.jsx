import React, { useState } from 'react';
import './addcard.css'; // Import the CSS file
import { addingcardtodb } from './apiIntereaction';

function AddCardForm() {
  const [formData, setFormData] = useState({
    question: '',
    answer: ''
  });
  const [questype, setquestype ] = useState('');
  const [ options, setoptions ] = useState({
    optionA : '',
    optionB : '', 
    optionC : '', 
    optionD : ''
  })
  const [mcqans, setmcqans] = useState('')


  const handleQuesType = async (e) =>{
    console.log(questype);
    setquestype(e.target.value);
    console.log(questype);
  }

  const handleMcqAns = async ( e ) => {
    setmcqans(e.target.value);
  }

  const handleOptoinsChange = async (e) => {

    const { name, value } = e.target;
    setoptions({
      ...options,
      [name] : value
    })
  }

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
    let que = formData.question;

    const data = { ans, que, questype, options , mcqans };
    console.log(data);

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
        <label htmlFor="answer">Select question type :</label>
        <select className="card_numbers" name='quesType' value={questype} onChange={handleQuesType}>
            <option value="" disabled>Select</option>
            <option value="1">Mcqa type questions</option>
            <option value="2">objective type questins</option>
        </select>
      </div>

      { questype == 1 && (
      
          <div>
              <div className="form-group">
                  <label htmlFor="answer">Option A:</label>
                  <input
                      type="text"
                      name="optionA"
                      value={options.optionA}
                      onChange={handleOptoinsChange} required
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="answer">Option B:</label>
                  <input
                      type="text"
                      name="optionB"
                      value={options.optionB}
                      onChange={handleOptoinsChange} required
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="answer">Option C:</label>
                  <input
                      type="text"
                      name="optionC"
                      value={options.optionC}
                      onChange={handleOptoinsChange} required
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="answer">Option D:</label>
                  <input
                      type="text"
                      name="optionD"
                      value={options.optionD}
                      onChange={handleOptoinsChange}  required
                  />
              </div>
          </div>
      )}

      {  questype == 2 && (
          <div className="form-group">
              <label htmlFor="answer">Answer:</label>
              <input
                type="text"
                id="answer"
                name="answer"
                value={formData.answer}
                onChange={handleChange}  required
              />
          </div>
      )}

      {  questype == 1 && (
          <div className="form-group">
              <label htmlFor="answer">Answer :</label>
              <select className="card_numbers" value={mcqans} name='mcqTypeAnswer' onChange={handleMcqAns}>
                  <option value="" disabled>Select option</option>
                  <option value="A">option A</option>
                  <option value="B">option B</option>
                  <option value="C">option C</option>
                  <option value="D">option D</option>
        </select>
          </div>
      )}


      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default AddCardForm;
