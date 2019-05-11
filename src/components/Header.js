import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "./custom.css";
import Api from './Api'

// child component of UserPage
export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {user: {}}
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
        const user = await this.props.func();
        this.setState({user: user.data});
    }

    async logOut() {
        const log = await Api.get('/api/user/logout');
        return log;
    }

    async handleClick() {
        const log = await this.logOut();
        console.log(log.data);
        this.props.func2();
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
                <NavLink to='/' activeClassName='link'>DashBoard</NavLink>
                <NavLink to='/' activeClassName='link'>Notifications</NavLink>
                <NavLink to='/clubs' activeClassName='link'>BrowseClubs</NavLink>
                <NavLink to='/' activeClassName='link'>BrowseEvents</NavLink>
                <NavLink to='/' activeClassName='link'>{this.state.user.username}</NavLink>
                <Button variant='outline-primary' onClick={this.handleClick}>Log Out</Button>

              </Navbar.Collapse>
            </Navbar>
          </div>
        )
      }
}
