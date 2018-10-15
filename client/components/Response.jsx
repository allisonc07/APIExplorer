import React from 'react';
import PropTypes from 'prop-types';

const Response = ({ response }) => (
  <div>
    <pre>{response}</pre>
  </div>
);

Response.propTypes = {
  response: PropTypes.string.isRequired,
}

export default Response;
