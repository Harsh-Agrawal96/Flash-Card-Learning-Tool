import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../public/css/cardcrud.css';
import QuestionForm from './components/questionForm';
import OptionsInput from './components/optionInput';
import AnswerInput from './components/answerInput';
import SubmitButton from './components/buttonSubmit';
import { addCardQuery } from '../backendApicall/cardCrud.js';
import { unknownError as Err, loginError as logErr } from '../utils/responses.js';

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
  const [mcqans, setmcqans] = useState('');
  const [key, setKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (!token || !userDetails) {
      navigate('/', { state : { message : logErr, type : 'msg'}});
    }
  }, [navigate]);
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));


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
    try{
      e.preventDefault();
      setIsLoading(true);
    
      let ans = formData.answer;
      let que = formData.question;
      const adminId = userDetails.msg._id;

      const data = { ans, que, questype, options , mcqans, key, adminId };

      const resData = await addCardQuery(data);

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
    <form className="form-container" onSubmit={handleSubmit}>
      <QuestionForm formData={formData} handleChange={handleChange} />

      <div className="form-group">
        <label htmlFor="answer">Select question type :</label>
        <select className="card_numbers" name='quesType' value={questype} onChange={(e) => setquestype(e.target.value)}>
            <option value="" disabled>Select</option>
            <option value="1">Mcqa type questions</option>
            <option value="2">objective type questins</option>
        </select>
      </div>

      { questype == 1 && (
          <OptionsInput options={options} handleOptoinsChange={handleOptoinsChange} />
      )}

      <AnswerInput questype={questype} mcqans={mcqans} handleMcqAns={handleMcqAns} formData={formData} handleChange={handleChange} />

        <div className="form-group">
          <label htmlFor="securityKey">Key:</label>
          <input
            type="number"
            name="key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            required
          />
        </div>

      <SubmitButton isLoading={isLoading} buttonText='Add' />
    </form>
  );
}

export default AddCardForm;
