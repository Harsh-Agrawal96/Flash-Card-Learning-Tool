import React from 'react';

const SubmitButton = ({ isLoading, buttonText }) => (
  <button type="submit" className="submit-button" disabled={isLoading}>
    {isLoading ? 'Loading...' : buttonText}
  </button>
);

export default SubmitButton;
