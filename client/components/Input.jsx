import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputDetails, handleChange, inputValues }) => {
  const { name } = inputDetails;
  const formattedName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  return (
    <div>
      <label htmlFor={name}>{`${formattedName}: `}</label>
      <input {...inputDetails} onChange={(event) => { handleChange(event, name); }} value={inputValues[name] || ''} />
    </div>
  );
};

Input.propTypes = {
  inputDetails: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputValues: PropTypes.object.isRequired,
}

export default Input;