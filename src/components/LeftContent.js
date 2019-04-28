import React, { Component } from "react";
import LeftContainer from "./LeftContainer";
import EventCard from "./EventCard";
import axios from "axios";

export default class LeftContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEvents: []
    };
  }

  getClubsInterested() {
    axios
      .get("https://info30005-2019-ch.herokuapp.com/api/clubs")
      .then(response => this.setState({ clubsInterested: response.data }));
  }

  getAllEvents() {
    axios
      .get("https://info30005-2019-ch.herokuapp.com/api/events")
      .then(response => this.setState({ allEvents: response.data }));
  }

  componentDidMount() {
    this.getClubsInterested();
    this.getAllEvents();
  }

  render() {
    //const clubs = this.state.clubsInterested;
    const allEvents = this.state.allEvents;
    const eventsRegistered = this.props.user.eventsRegistered;
    console.log(eventsRegistered);
    const filtered = this.state.allEvents.filter(
      event => event.id in this.props.user.eventsRegistered
    );

    console.log(filtered);
    return (
      <div>
        <div class="left-content">
          <EventCard title="Upcoming Events" list={allEvents} />
        </div>
        <div class="left-content">
          <EventCard title="Registered Events" list={filtered} />
        </div>
        {/* <div>
          <LeftContainer title="Your Clubs" list={clubs} />
        </div> */}
      </div>
    );
  }
}
