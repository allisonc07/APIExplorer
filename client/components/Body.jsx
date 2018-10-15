import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

const Body = ({ body, handleSubmit, handleChange, inputValues }) => (
  <form onSubmit={handleSubmit}>
    {
      body && body.map((input) => {
        return <Input key={input.name} inputDetails={input} handleChange={handleChange} inputValues={inputValues} />;
      })
    }
    <input type="submit" value="Send Request" />
  </form>
);

Body.propTypes = {
  body: PropTypes.arrayOf(PropTypes.object),
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputValues: PropTypes.object.isRequired,
};

export default Body;
