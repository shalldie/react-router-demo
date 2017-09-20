import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';
import registerServiceWorker from './registerServiceWorker';
import './assets/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
