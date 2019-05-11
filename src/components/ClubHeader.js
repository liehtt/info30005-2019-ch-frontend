import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "./custom.css";
import Api from './Api'

export default class ClubHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {club: {}}
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
        const club = await this.props.func();
        this.setState({club: club.data});
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
                <NavLink to='/club/login' activeClassName='link'>DashBoard</NavLink>
                <NavLink to='/club/login' activeClassName='link'>Members</NavLink>
                <NavLink to='/club/login' activeClassName='link'>CreateEvent</NavLink>
                <NavLink to='/club/login' activeClassName='link'>EventsCreated</NavLink>
                <NavLink to='/club/login' activeClassName='link'>{this.state.club.clubname}</NavLink>
                <Button variant='outline-primary' onClick={this.handleClick}>Log Out</Button>

              </Navbar.Collapse>
            </Navbar>
          </div>
        )
      }
}
