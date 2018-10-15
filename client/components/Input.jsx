import React from 'react';

const Input = ({ inputDetails }) => (
  <label>
    <input {...input} onChange={(event) => { handleChange(event, input.name); }} value={inputValues[input.name] || ''} />
  </label>
);

export default Input;