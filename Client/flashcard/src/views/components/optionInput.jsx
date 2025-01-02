import React from 'react';

const OptionsInput = ({ options, handleOptoinsChange }) => (
  <div>
    {['A', 'B', 'C', 'D'].map((option) => (
      <div className="form-group" key={option}>
        <label htmlFor={`option${option}`}>Option {option}:</label>
        <input
          type="text"
          name={`option${option}`}
          value={options[`option${option}`]}
          onChange={handleOptoinsChange}
          required
        />
      </div>
    ))}
  </div>
);

export default OptionsInput;
