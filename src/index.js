import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'http://192.168.1.206:3091';
React.Component.prototype.$http=axios
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
