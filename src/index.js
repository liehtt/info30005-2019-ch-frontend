import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';

// renders UserPage and the only ReactDOM.render, connects to ./public/index.html
ReactDOM.render(<App/>, document.getElementById('root'));
