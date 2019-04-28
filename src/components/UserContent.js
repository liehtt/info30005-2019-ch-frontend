import React, { Component } from "react";
import EventList from "./EventList";
import axios from "axios";

// child component of UserPage
export default class UserContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEvents: [],
      user: {}
    };
  }

  // fetch first user from static array to simulate homepage of that user
  getUser() {
      axios.get("https://info30005-2019-ch.herokuapp.com/api/user/0")
        .then(response => this.setState({ user: response.data }))
  }


  // fetch events from events list to simulate upcoming events
  getAllEvents() {
    axios
      .get("https://info30005-2019-ch.herokuapp.com/api/events")
      .then(response => this.setState({ allEvents: response.data }));
  }


  componentDidMount() {
    this.getUser();
    this.getAllEvents();
  }

  render() {
    const allEvents = this.state.allEvents;
    const eventsRegistered = this.state.user.eventsRegistered;
    // extract events that user has registered
    var filtered;
    if(allEvents !== undefined) {
        filtered = allEvents.filter(
          event => event.id in this.state.user.eventsRegistered
        );
    }


    return (
      <div>
        <div class="user-content">
          <EventList title="Upcoming Events" list={allEvents} />
        </div>
        <div class="user-content">
          <EventList title="Registered Events" list={filtered} />
        </div>

      </div>
    );
  }
}
