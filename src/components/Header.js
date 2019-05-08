import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./custom.css";

// child component of UserPage
export default class Header extends Component {

  render() {
    return (
      <div>
        <Navbar fixed="top" class="navbar" variant="dark" expand="lg">
          <Navbar.Brand class="navbar-brand" href="/">
            Clubhub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link class="link" href="/api">
                Dashboard
            </Nav.Link>
            <Nav.Link class="link" href="/">
              Notifications
            </Nav.Link>
            <Nav.Link class="link" href="/">
              Browse Clubs
            </Nav.Link>
            <Nav.Link class="link" href="/">
              Browse Events
            </Nav.Link>
            <Nav.Link class="link" href="/">
              Settings
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
