import React, { Component } from "react";
import ClubList from "./ClubList";

import EventList from "./EventList";

import {Button, Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {
    Redirect
} from 'react-router-dom';



// child component of UserPage
export default class UserContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: [],
      redirectToBrowseClub: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

   handleClick(){
      this.setState({redirectToBrowseClub: true});
  }



  render() {
    if(this.state.redirectToBrowseClub) {
      return (<Redirect to='/clubs' />);
    } else {
      return (

        <div>
            <Row className="user-content-row">
                <Col lg={12} sm={8} className="user-club-col">
                    <div className="user-content">
                        <EventList title="Events Joined" events={this.props.events} />
                    </div>
                </Col>
                <Col lg={12} sm={8} className="user-event-col">
                    <div className="user-content">
                        <ClubList title="Clubs Joined" clubs={this.props.clubs} str="user"/>
                    </div>
                </Col>
            </Row>

            <div className="more-clubs-row" >
                <h1 className="text">Lets get you some more clubs</h1>
                <Button className="custom-white-outline-btn create-event-btn" onClick={this.handleClick}>Browse Clubs</Button>
            </div>
        </div>
      );
    }
  }
}
