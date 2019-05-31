import React, { Component } from "react";
import ClubList from "./ClubList";

import EventList from "./EventList";

import {Button, Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import headingImg from "../images/img-bg.jpg";
import Redirect from "react-router-dom/es/Redirect";



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
                <Col sm={12} lg={8} className="user-club-col">
                    <div className="user-content">
                        <EventList title="Upcoming Events" events={this.props.events} />
                    </div>
                </Col>
                <Col sm={12} lg={4} className="user-event-col">
                    <div className="user-content">
                        <ClubList title="Clubs Joined" clubs={this.props.clubs} str="user"/>
                    </div>
                </Col>
            </Row>
            <div className="new-user-row">
                <img src = {headingImg} className="header-image"/>
                <h1 className="text">Lets get you some clubs</h1>
                <Button className="custom-white-outline-btn create-event-btn" onClick={this.handleClick}>Browse Clubs</Button>
            </div>

        </div>
      );
    }
  }
}
//<EventList title="Upcoming Events" events={this.props.events} />
// ========= UNUSED ========= //
// async fetchEvents() {
//     const events = await axios.get("https://info30005-2019-ch.herokuapp.com/api/events");
//     return events.data;
// }
//
// async fetchFiltered() {
//     const events = await axios.get("https://info30005-2019-ch.herokuapp.com/api/events");
//     const currentUser = await axios.get("https://info30005-2019-ch.herokuapp.com/api/user/0");
//     const filteredEvents = events.data.filter(e => e.id in currentUser.data.eventsRegistered);
//     return filteredEvents;
// }
