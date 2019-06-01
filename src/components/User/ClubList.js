import React, { Component } from "react";
import ClubCard from "./ClubCard";
import UserClubCard from "./UserClubCard"
import {
    Container, Nav, Navbar,
    Row
} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export default class ClubList extends Component {

    constructor(props) {
        super(props);
        this.state = {list: []};

        this.getClubCards = this.getClubCards.bind(this);
        this.getUserClubCards = this.getUserClubCards.bind(this);
    }

    componentDidMount() {
        const list = this.props.userClubs;
        this.setState({ list });
    }

    getClubCards(){
        const clubs = this.props.clubs;
        if(clubs.length !== 0 ){
            return(this.props.clubs.map(e => {
                return (
                    <ClubCard
                        thisClub={e}
                        addClub={this.props.addClub}
                        user={this.props.user}
                    />
                );
            }))
        }
        else
            return(
                <div className="no-clubs-to-join">
                    <h1  className="msg">Looks like you've joined all clubs already! You social bumble bee!</h1>
                </div>

            );
    }

    getUserClubCards(){

        const clubs = this.props.clubs;
        if(clubs.length !== 0 ){
            return (clubs.map(e => {
                return (
                    <UserClubCard
                        thisClub={e}
                    />
                );
            }))
        }
        else
            return(
                <div className="no-clubs-yet">
                    <p  className="msg">Looks like you haven't joined any clubs yet!</p>
                </div>
            );
    }

    render() {

        if(this.props.str === "browse") {
            return (
                <div className="club-container">
                <h3 className="container-title">{this.props.title}</h3>
                <Container className="browse-container-fluid">
                <Row className="club-list-row">
                  {this.getClubCards()}
                </Row>
                </Container>
                </div>
            );
        } else {
            return (
                <div className="club-container">
                <h3 className="container-title">{this.props.title}</h3>


                <Container className="container-fluid">

                <Row className="club-list-row">
                    {this.getUserClubCards()}
                </Row>
                </Container>
                </div>
            );
        }
    }
}
