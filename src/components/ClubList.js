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
    }

    componentDidMount() {
        const list = this.props.userClubs;
        this.setState({ list });
    }

    render() {

        if(this.props.str === "browse") {
            return (
                <div className="club-container">
                <h3 className="container-title">{this.props.title}</h3>
                <Container className="container-fluid">
                <Row>
                  {this.props.clubs.map(e => {
                    return (
                      <ClubCard
                        thisClub={e}
                        addClub={this.props.addClub}
                        user={this.props.user}
                      />
                    );
                  })}
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
                    {/*<Container>*/}
                        {/*<Navbar className="list-container-heading" fixed="top" collapseOnSelect expand="lg" >*/}
                            {/*<Nav className="mx-auto">*/}
                                {/*{this.props.title}*/}
                            {/*</Nav>*/}
                        {/*</Navbar>*/}
                    {/*</Container>*/}
                  {this.props.clubs.map(e => {
                    return (
                      <UserClubCard
                        thisClub={e}
                      />
                    );
                  })}
                </Row>
                </Container>
                </div>
            );
        }
    }
}
