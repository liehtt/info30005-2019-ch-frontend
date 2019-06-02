import React, { Component } from "react";
import Header from "./Header";
import Api from "../Api";
import EventCardList from "./EventCardList";

export default class BrowseEventPage extends Component {

    constructor(props) {
      super(props);
      this.state = {
        events: []
      }
    }

    async getProfile() {
      const user = await Api.get("/api/user/profile");
      return user;
    }

    async registerUserToEvent(eventId) {
      const {data: user} = await Api.get('/api/user/profile');
      await Api.post("/api/user/addEvent", {
          eventId: eventId,
          userId: user._id
      });
    }

    async componentDidMount() {
      const {data: user} = await Api.get('/api/user/profile');

      const { data: allEvents } = await Api.get('/api/events');
      console.log(allEvents);
      const displayEvents = allEvents.filter(function(c) {
        return user.eventsRegistered.indexOf(c._id) === -1;
      })
      this.setState({events: displayEvents});
    }

    render() {
      return (
        <div className="user-content">
          <Header func={this.getProfile} func2={this.props.func} />
            <EventCardList
                title="Browse Events"
                events={this.state.events}
                addEvent={this.registerUserToEvent}
            />
        </div>
      );
    }

};
