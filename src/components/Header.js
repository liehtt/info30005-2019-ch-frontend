import React, { Component } from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "./custom.css";
import Api from './Api'
import logo from '../images/border-logo.svg'
import turtleImg from "../images/turtle_user.png"

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
        this.props.func2();
    }


     render() {
        return (
          <div>
            {/*<Navbar fixed="top" className="navbar" variant="dark" expand="lg">*/}
              {/*<Navbar.Brand  href="/">*/}
                {/*<img className="navbar-brand" src={logo} alt="Clubhub Brand Logo"/>*/}
              {/*</Navbar.Brand>*/}
              {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
              {/*<Navbar.Collapse id="basic-navbar-nav">*/}
               {/*<NavLink to='/' activeClassName='link'>Dashboard</NavLink>*/}
                {/*<NavLink to='/' activeClassName='link'>Notifications</NavLink>*/}
                {/*<NavLink to='/clubs' activeClassName='link'>Browse Clubs</NavLink>*/}
                {/*<NavLink to='/' activeClassName='link'>Browse Events</NavLink>*/}
                {/*<NavLink to='/' activeClassName='link'>{this.state.user.username}</NavLink>*/}
                {/*<Button variant='outline-primary' onClick={this.handleClick}>Log Out</Button>*/}

              {/*</Navbar.Collapse>*/}
            {/*</Navbar>*/}

              <Navbar className="navbar" variant="light" fixed="top" collapseOnSelect expand="lg" >
                  <Navbar.Brand href="#home">
                      <img className="navbar-brand" src={logo} alt="Clubhub Brand Logo"/>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav>
                          <NavLink to='/' activeClassName='link'>Dashboard</NavLink>
                          <NavLink to='/' activeClassName='link'>Notifications</NavLink>
                          <NavLink to='/clubs' activeClassName='link'>Browse Clubs</NavLink>
                          <NavLink to='/' activeClassName='link'>Browse Events</NavLink>
                      </Nav>
                      <Nav className="ml-auto">
                          {/*<img className="user-turtle-img" src={turtleImg} alt="User Image"/>*/}
                          <NavLink to='/' activeClassName='link'> Hi, {this.state.user.username}</NavLink>
                      </Nav>
                      <Nav className="ml-auto">
                          <Button className="custom-white-outline-btn" onClick={this.handleClick}>Log Out</Button>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
          </div>
        )
      }
}
