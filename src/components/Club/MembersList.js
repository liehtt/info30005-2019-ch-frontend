import React, { Component } from "react";

import MemberCard from "./MemberCard"
import {
    Container,
    Row
} from "react-bootstrap";

export default class MembersList extends Component {

    constructor(props) {
        super(props);
        this.state = {list: []};

        this.getMemberCards = this.getMemberCards.bind(this);

    }

    componentDidMount() {
        const list = this.props.userClubs;
        this.setState({ list });
    }

    getMemberCards(){
        const members = this.props.members;
        if(members.length !== 0 ){
            return(members.map(e => {
                return (
                    <MemberCard
                        thisMember={e.username}
                        key={e._id}
                    />
                );
            }))
        }
        else
            return(
                <div className="no-clubs-to-join">
                    <h1  className="msg">No members yet? Create events and invite people :) </h1>
                </div>

            );
    }


    render() {


            return (
                <div className="member-container">
                <h3 className="container-title"> Your Members</h3>
                <Container className="browse-container-fluid">
                <Row className="club-list-row">
                  {this.getMemberCards()}
                </Row>
                </Container>
                </div>
            );


    }
}
