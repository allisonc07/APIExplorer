import React from 'react';
import PropTypes from 'prop-types';

import style from '../styles/RequestType.css';

const RequestType = ({ title, method, url }) => {
  const fullUrl = new URL(url);
  return (
    <div>
      <h2>
        {title}
      </h2>
      <h3 className={style.method}>
        {method}
      </h3>
      <h3>
        Base URL
      </h3>
      <p>
        {fullUrl.origin}
      </p>
    </div>
  )
};

RequestType.propTypes = {
  title: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default RequestType;