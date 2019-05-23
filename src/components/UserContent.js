import React, { Component } from "react";
import ClubList from "./ClubList";
import {Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";


// child component of UserPage
export default class UserContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clubs: []
    };
  }

  render() {
    return (
      <div>
          <Row>
              <Col sm={12} lg={8} className="user-club-col">
                  <div className="user-content">
                      <ClubList title="Upcoming Events" clubs={this.props.clubs} str="user"/>
                  </div>
              </Col>
              <Col sm={12} lg={4} className="user-event-col">
                  <div className="user-content">
                      <ClubList title="Your Clubs" clubs={this.props.clubs} str="user"/>
                  </div>
              </Col>
          </Row>

      </div>
    );
  }
}

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
