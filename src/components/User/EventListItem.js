import React, { Component } from "react";

class EventListItem extends Component {
  state = {};

  componentDidMount() {}

  render() {
      const event = this.props.thisEvent;
    return (
      <a href="#" className="list-group-item list-group-item-action event-list-card">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{event.title}</h5>
          <small>3 days</small>
        </div>
        <p className="mb-1">
            Description: {event.description}
        </p>
        {/*<small>Club: {event.club.clubname}</small>*/}
        <small>Venue: {event.venue}</small>
      </a>
    );
  }
}

export default EventListItem;
