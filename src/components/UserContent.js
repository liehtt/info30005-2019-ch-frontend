import React, { Component } from "react";
import EventList from "./EventList";
import axios from "axios";

export default class UserContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEvents: [],
      user: {}
    };
  }

  getUser() {
      axios.get("https://info30005-2019-ch.herokuapp.com/api/user/0")
        .then(response => this.setState({ user: response.data }))
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
    this.getUser();
    this.getClubsInterested();
    this.getAllEvents();
  }

  render() {
    //const clubs = this.state.clubsInterested;
    const allEvents = this.state.allEvents;
    const eventsRegistered = this.state.user.eventsRegistered;
    console.log(eventsRegistered);
    var filtered;
    if(allEvents !== undefined) {
        filtered = allEvents.filter(
          event => event.id in this.state.user.eventsRegistered
        );
    }


    console.log(filtered);
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
