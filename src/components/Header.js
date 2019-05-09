import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./custom.css";

// child component of UserPage
export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {user: {}}
    }

    async componentDidMount() {
        const user = await this.props.func();
        this.setState({user: user.data});
    }


     render() {
        return (
          <div>
            <Navbar fixed="top" className="navbar" variant="dark" expand="lg">
              <Navbar.Brand className="navbar-brand" href="/">
                Clubhub
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link className="link" href="/api">
                    Dashboard
                </Nav.Link>
                <Nav.Link className="link" href="/">
                    Notifications
                </Nav.Link>
                <Nav.Link className="link" href="/">
                    Browse Clubs
                </Nav.Link>
                <Nav.Link className="link" href="/">
                    Browse Events
                </Nav.Link>
                <Nav.Link className="link" href="/">
                    {this.state.user.username}
                </Nav.Link>
              </Navbar.Collapse>
            </Navbar>
          </div>
        )
      }
}
