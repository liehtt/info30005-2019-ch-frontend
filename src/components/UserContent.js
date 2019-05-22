import React, { Component } from "react";
import ClubList from "./ClubList";


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
        <div class="user-content">
          <ClubList title="Your Clubs" clubs={this.props.clubs} str="user"/>
          <EventList title="Upcoming Events" 
        </div>
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
