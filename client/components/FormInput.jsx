import React from 'react';
import PropTypes from 'prop-types';

import style from '../styles/FormInput.css';

const FormInput = ({ inputDetails, handleChange, inputValues }) => {
  const { name } = inputDetails;
  const formattedName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  return (
    <label htmlFor={name} className={style.formInputs}>
      {`${formattedName}: `}
      <input {...inputDetails} onChange={(event) => { handleChange(event, name); }} value={inputValues[name] || ''} className={style.inputFields} />
    </label>
  );
};

FormInput.propTypes = {
  inputDetails: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputValues: PropTypes.object.isRequired,
}

export default FormInput;
