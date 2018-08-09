import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';

import $ from 'jquery';

import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'http://123.57.236.178:8010/WebAPI';
React.Component.prototype.$http=axios;
React.Component.prototype.$=$;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
