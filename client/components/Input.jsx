import React from 'react';

const Input = ({ inputDetails, handleChange, inputValues }) => {
  const { name } = inputDetails;
  return (
    <div>
      <label htmlFor={name}>{`${name.charAt(0).toUpperCase()}${name.slice(1)}: `}</label>
      <input {...inputDetails} onChange={(event) => { handleChange(event, name); }} value={inputValues[name] || ''} />
    </div>
  );
};

export default Input;