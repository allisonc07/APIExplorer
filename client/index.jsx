import React from 'react';
import ReactDOM from 'react-dom';
import config from '../apiconfig';

import ExplorerComponent from './components/ExplorerComponent';

const { title, url, method, body } = config;
ReactDOM.render(<ExplorerComponent
  title={title}
  url={url}
  method={method}
  body={body || null}
/>, document.getElementById('root'));
