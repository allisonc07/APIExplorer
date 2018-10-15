import React from 'react';

const Response = ({ response }) => {
  console.log('MY RESPONSE' + typeof response);
  return (
    <div>
      {response === '' ? response : <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  )
};


export default Response;
