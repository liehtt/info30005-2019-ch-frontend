import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "../custom.css";
import Api from '../Api'
import logo from '../../images/border-logo.svg'

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
        await this.logOut();
        this.props.func2();
    }


     render() {
        return (
          <div>
              <Navbar className="navbar" variant="dark" fixed="top" collapseOnSelect expand="lg" >
                  <Navbar.Brand href="#home">
                      <img className="navbar-brand" src={logo} alt="Clubhub Brand Logo"/>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav>
                          <NavLink to='/' activeClassName='link'>Dashboard</NavLink>
                          <NavLink to='/clubs' activeClassName='link'>Browse Clubs</NavLink>
                          <NavLink to='/events' activeClassName='link'>Browse Events</NavLink>
                      </Nav>
                      <Nav className="ml-auto">
                          <Navbar.Text to='/' activeclassname='link'> <a> Hi, {this.state.user.username}</a></Navbar.Text>
                          <Button className="custom-white-outline-btn" onClick={this.handleClick}>Log Out</Button>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
          </div>
        )
      }
}
