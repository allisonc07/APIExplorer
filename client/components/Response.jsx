import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/Response.css';

const Response = ({ response }) => (
  <div>
    <h3>Response</h3>
    <div className={style.responseWrapper}>
      <pre className={style.responseText}>{response}</pre>
    </div>
  </div>
);

Response.propTypes = {
  response: PropTypes.string.isRequired,
}

export default Response;
