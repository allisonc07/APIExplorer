import React from 'react';
import ReactDOM from 'react-dom';
import config from '../apiconfig';

import ExplorerComponent from './components/ExplorerComponent';

ReactDOM.render(<ExplorerComponent title={config.title} url={config.url} method={config.method} body={config.body || null} />, document.getElementById('root'));
