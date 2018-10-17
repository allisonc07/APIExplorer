import React from 'react';
import PropTypes from 'prop-types';

import FormInput from './FormInput';
import style from '../styles/RequestBody.css';

const RequestBody = ({ body, handleSubmit, handleChange, inputValues }) => (
  <div>
    {body &&
      <h3>Body</h3>
    }
    <form onSubmit={handleSubmit}>
      {
        body && body.map((input) => {
          return (
            <FormInput
              key={input.name}
              inputDetails={input}
              handleChange={handleChange}
              inputValues={inputValues}
            />
          );
        })
      }
      <input type="submit" value="Send Request" className={style.submitButton} />
    </form>
  </div>
);

RequestBody.propTypes = {
  body: PropTypes.arrayOf(PropTypes.object),
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputValues: PropTypes.object.isRequired,
};

export default RequestBody;
