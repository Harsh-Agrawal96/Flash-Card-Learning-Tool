import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const SendCardQuery = async (formData) => {

  try{
    const navigate = useNavigate();

  console.log( "data is " , formData);
  const response = await fetch('http://localhost:8000/give/cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const resData = await response.json();
  const cards = resData.data;

  if (response.ok) {
    // Handle successful login
    console.log('Response:', resData);
  } else {
    // Handle errors
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


export {

  SendCardQuery,
}