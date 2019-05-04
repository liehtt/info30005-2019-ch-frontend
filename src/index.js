import React from 'react';
import ReactDOM from 'react-dom';
import UserPage from './components/UserPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import 'bootstrap/dist/css/bootstrap.min.css';

// renders UserPage and the only ReactDOM.render, connects to ./public/index.html
ReactDOM.render(<SignUpPage/>, document.getElementById('root'));
