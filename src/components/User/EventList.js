import React, { Component } from "react";
import EventListItem from "./EventListItem";
import { Container, Row } from "react-bootstrap";
import UserClubCard from "./ClubList";

class EventList extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { list: [] };

    this.getEventListItems = this.getEventListItems.bind(this);
  }

  componentDidMount() {
    const list = this.props.events;
    this.setState({ list });
  }

  getEventListItems(){

    const events = this.props.events;
    if(events.length !== 0 ){
      return (this.props.events.map(e => {
        return <EventListItem thisEvent={e} />;
      }))
    }
    else
      return(
          <div className="no-events-yet">
            <p  className="msg">Looks like you haven't signed up for any events yet!</p>
          </div>
      );
  }

  render() {
    console.log(this.state.list);
    return (
      <div className="club-container">
        <h3 className="container-title">{this.props.title}</h3>
        <Container className="event-container-fluid">
          <Row className="event-list-row">
            {this.getEventListItems()}
          </Row>
        </Container>
      </div>
    );
  }
}

export default EventList;
