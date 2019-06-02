import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "../custom.css";
import Api from '../Api'
import logo from '../../images/border-logo.svg'

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
                            <NavLink to='/club/profile' activeClassName='link'>Dashboard</NavLink>
                            <NavLink to='/club/members' activeClassName='link'>Members</NavLink>
                        </Nav>
                        <Nav className="ml-auto">
                            <Navbar.Text to='/' activeclassname='link'> <a> Hi, {this.state.club.clubname}</a></Navbar.Text>
                            <Button className="custom-white-outline-btn" onClick={this.handleClick}>Log Out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
      }
}
