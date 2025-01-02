import React from 'react';

const QuestionForm = ({ formData, handleChange }) => (
  <div className="form-group">
    <label htmlFor="question">Question:</label>
    <textarea
      type="text"
      id="question"
      name="question"
      value={formData.question}
      onChange={handleChange}
      required
    />
  </div>
);

export default QuestionForm;
