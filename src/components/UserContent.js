import React, { Component } from "react";
import ClubList from "./ClubList";
import EventList from "./EventList";
import axios from "axios";

// child component of UserPage
export default class UserContent extends Component {
  state = {
    clubs: []
  };
  constructor(props) {
    super(props);
  }

  async fetchEvents() {
    const events = await axios.get(
      "https://info30005-2019-ch.herokuapp.com/api/events"
    );
    return events.data;
  }

  //   async fetchFiltered() {
  //       const events = await axios.get("https://info30005-2019-ch.herokuapp.com/api/events");
  //       const currentUser = await axios.get("https://info30005-2019-ch.herokuapp.com/api/user/0");
  //       const filteredEvents = events.data.filter(e => e.id in currentUser.data.eventsRegistered);
  //       return filteredEvents;
  //   }

  //   async fetchUserClubs() {
  //     console.log("fetching user clubs");
  //     const clubs = await axios.get(
  //       "https://info30005-2019-ch.herokuapp.com/api/user/" +
  //         this.props.user._id +
  //         "/clubsub"
  //     );
  //     console.log(this.props.user._id);
  //     console.log(clubs);
  //     return clubs;
  //   }

  async componentDidMount() {}

  render() {
    return (
      <div>
        <div class="user-content">
          <ClubList title="Your Clubs" userClubs={this.props.clubs} />
          {/* <EventList title="Upcoming Events" func={this.fetchEvents} /> */}
        </div>
      </div>
    );
  }
}
