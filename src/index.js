import React from 'react';
import ReactDOM from 'react-dom';
import UserPage from './components/UserPage';
import EventCard from './components/EventCard';
//import LoginPage from './components/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<UserPage/>, document.getElementById('root'));
ReactDOM.render(<EventCard/>, document.getElementById('card'));


// testing
// ReactDOM.render(<LoginPage />, document.getElementById('root'));