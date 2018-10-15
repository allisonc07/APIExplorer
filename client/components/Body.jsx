import React from 'react';

// import Input from './Input';

const Body = ({ body, handleSubmit, handleChange, inputValues }) => (
  <form onSubmit={handleSubmit}>
    {
      body && body.map((input) => {
        return <input {...input} onChange={(event) => { handleChange(event, input.name); }} value={inputValues[input.name] || ''} />;
      })
    }
    <input type="submit" value="Send Request" />
  </form>
);

export default Body;
