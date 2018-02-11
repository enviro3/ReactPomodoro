import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PomoTime from './PomoTime.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<PomoTime />, document.getElementById('root'));
registerServiceWorker();
