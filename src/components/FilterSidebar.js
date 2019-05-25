import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "./custom.css";
import Api from './Api'

// child component of UserPage
export default class FilterSidebar extends Component {

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
                <div className="navbar navbar-default visible-xs">
                    <div className="container-fluid">
                        <button className="btn btn-default navbar-btn" data-toggle="collapse"
                                data-target="#filter-sidebar">
                            <i className="fa fa-tasks"></i> Toggle Sidebar
                        </button>
                    </div>
                </div>

                <div className="container-fluid">

                    <div className="row">

                        <!-- filter sidebar -->
                        <div id="filter-sidebar"
                             className="col-xs-6 col-sm-3 visible-sm visible-md visible-lg collapse sliding-sidebar">

                            <div>
                                <h4 data-toggle="collapse" data-target="#group-1">
                                    <i className="fa fa-fw fa-caret-down parent-expanded"></i>
                                    <i className="fa fa-fw fa-caret-right parent-collapsed"></i>
                                    Artist
                                </h4>
                                <div id="group-1" className="list-group collapse in">
                                    <a className="list-group-item" href="#">
                                        <span className="badge">3</span> John Lennon
                                    </a>
                                    <a className="list-group-item" href="#">
                                        <span className="badge">3</span> John Lennon
                                    </a>
                                    <a className="list-group-item" href="#">
                                        <span className="badge">3</span> John Lennon
                                    </a>
                                    <a className="list-group-item" href="#">
                                        <span className="badge">3</span> John Lennon
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h4 data-toggle="collapse" data-target="#group-2">
                                    <i className="fa fa-fw fa-caret-down parent-expanded"></i>
                                    <i className="fa fa-fw fa-caret-right parent-collapsed"></i>
                                    Artist
                                </h4>
                                <div id="group-2" className="list-group collapse in">
                                    <a className="list-group-item" href="#">
                                        <span className="badge">3</span> John Lennon
                                    </a>
                                    <a className="list-group-item" href="#">
                                        <span className="badge">3</span> John Lennon
                                    </a>
                                    <a className="list-group-item" href="#">
                                        <span className="badge">3</span> John Lennon
                                    </a>
                                    <a className="list-group-item" href="#">
                                        <span className="badge">3</span> John Lennon
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h4 data-toggle="collapse" data-target="#group-3">
                                    <i className="fa fa-fw fa-caret-down parent-expanded"></i>
                                    <i className="fa fa-fw fa-caret-right parent-collapsed"></i>
                                    Artist
                                </h4>
                                <div id="group-3" className="list-group collapse in">
                                    <a className="list-group-item" href="#">
                                        <span className="badge">3</span> John Lennon
                                    </a>
                                    <a className="list-group-item" href="#">
                                        <span className="badge">3</span> John Lennon
                                    </a>
                                    <a className="list-group-item" href="#">
                                        <span className="badge">3</span> John Lennon
                                    </a>
                                    <a className="list-group-item" href="#">
                                        <span className="badge">3</span> John Lennon
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h4 data-toggle="collapse" data-target="#group-4">
                                    <i className="fa fa-fw fa-caret-down parent-expanded"></i>
                                    <i className="fa fa-fw fa-caret-right parent-collapsed"></i>
                                    Artist
                                </h4>
                                <div id="group-4" className="list-group collapse in">
                                    <a className="list-group-item" href="#">
                                        <span className="badge">3</span> John Lennon
                                    </a>
                                    <a className="list-group-item" href="#">
                                        <span className="badge">3</span> John Lennon
                                    </a>
                                    <a className="list-group-item" href="#">
                                        <span className="badge">3</span> John Lennon
                                    </a>
                                    <a className="list-group-item" href="#">
                                        <span className="badge">3</span> John Lennon
                                    </a>
                                </div>
                            </div>

                        </div>

                        <!-- table container -->
                        <div className="col-sm-9" style={{"background-color":"red"}}>

                            <h1> This is Cards Space</h1>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
