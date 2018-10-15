import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ inputDetails, handleChange, inputValues }) => {
  const { name } = inputDetails;
  const formattedName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  return (
    <label htmlFor={name}>
      {`${formattedName}: `}
      <input {...inputDetails} onChange={(event) => { handleChange(event, name); }} value={inputValues[name] || ''} />
    </label>
  );
};

FormInput.propTypes = {
  inputDetails: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputValues: PropTypes.object.isRequired,
}

export default FormInput;
