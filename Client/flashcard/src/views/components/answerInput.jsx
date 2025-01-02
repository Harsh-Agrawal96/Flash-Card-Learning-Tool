import React from 'react';

const AnswerInput = ({ questype, mcqans, handleMcqAns, formData, handleChange }) => (
  <>
    {questype === '2' && (
      <div className="form-group">
        <label htmlFor="answer">Answer:</label>
        <textarea
          type="text"
          id="answer"
          name="answer"
          value={formData.answer}
          onChange={handleChange}
          required
        />
      </div>
    )}

    {questype === '1' && (
      <div className="form-group">
        <label htmlFor="answer">Answer:</label>
        <select
          className="card_numbers"
          value={mcqans}
          name="mcqTypeAnswer"
          onChange={handleMcqAns}
          required
        >
          <option value="" disabled>
            Select option
          </option>
          {['A', 'B', 'C', 'D'].map((option) => (
            <option value={option} key={option}>
              Option {option}
            </option>
          ))}
        </select>
      </div>
    )}
  </>
);

export default AnswerInput;
