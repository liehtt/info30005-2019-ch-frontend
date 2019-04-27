import React, {Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class HeaderAlt extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
            <Navbar variant="light" expand="lg">
            <Navbar.Brand href="/">Clubhub</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link class="link" href="/">Notifications</Nav.Link>
                <Nav.Link class="link" href="/">Browse Clubs</Nav.Link>
                <Nav.Link class="link" href="/">Browse Events</Nav.Link>
                <Nav.Link class="link" href="/">Settings</Nav.Link>
            </Navbar.Collapse>
            </Navbar>
          </div>
        );
    }
}