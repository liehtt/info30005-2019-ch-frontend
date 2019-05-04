import React, { Component } from "react";
import EventList from "./EventList";
import axios from "axios";


// child component of UserPage
export default class UserContent extends Component {
  constructor(props) {
    super(props);
  }

  async fetchEvents() {
      const events = await axios.get("https://info30005-2019-ch.herokuapp.com/api/events");
      return events.data;
  }

  async fetchFiltered() {
      const events = await axios.get("https://info30005-2019-ch.herokuapp.com/api/events");
      const currentUser = await axios.get("https://info30005-2019-ch.herokuapp.com/api/user/0");
      const filteredEvents = events.data.filter(e => e.id in currentUser.data.eventsRegistered);
      return filteredEvents;
  }

  render() {

    return (
      <div>
        <div class="user-content">
          <EventList title="Upcoming Events" func={this.fetchEvents} />
        </div>
        <div class="user-content">
          <EventList title="Registered Events" func={this.fetchFiltered}/>
        </div>
      </div>
    );
  }
}
