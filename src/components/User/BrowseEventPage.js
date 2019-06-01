import React, { Component } from "react";
import Header from "./Header";
import Api from "../Api";
import ClubList from "./BrowseClubPage";
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

    async componentDidMount() {
      const { data: allEvents } = await Api.get('/api/events');
      this.setState({events: allEvents});
    }

    render() {
      return (
        <div className="user-content">
          <Header func={this.getProfile} func2={this.props.func} />
            <EventCardList
                title="Browse Events"
                events={this.state.events}
                // addClub={this.registerUserToClub}

            />
        </div>
      );
    }

};
