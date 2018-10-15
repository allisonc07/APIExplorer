import React from 'react';

const RequestType = ({ title, method, url }) => {
  var baseUrl = new URL(url);
  return (
    <div>
      <h1>
        {title}
      </h1>
      <h3>
        {method}
      </h3>
      <h3>
        Base URL
      </h3>
      <h4>
        {baseUrl.origin}
      </h4>
    </div>
  )
};

export default RequestType;