import React from 'react';

import Input from './Input';

const Body = ({ body, handleSubmit, handleChange, inputValues }) => (
  <form onSubmit={handleSubmit}>
    {
      body && body.map((input) => {
        return <Input inputDetails={input} handleChange={handleChange} inputValues={inputValues} />;
      })
    }
    <input type="submit" value="Send Request" />
  </form>
);

export default Body;
