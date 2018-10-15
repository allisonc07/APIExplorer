import React from 'react';
import PropTypes from 'prop-types';

import FormInput from './FormInput';

const RequestBody = ({ body, handleSubmit, handleChange, inputValues }) => (
  <form onSubmit={handleSubmit}>
    {
      body && body.map((input) => {
        return <FormInput key={input.name} inputDetails={input} handleChange={handleChange} inputValues={inputValues} />;
      })
    }
    <input type="submit" value="Send Request" />
  </form>
);

RequestBody.propTypes = {
  body: PropTypes.arrayOf(PropTypes.object),
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputValues: PropTypes.object.isRequired,
};

export default RequestBody;
