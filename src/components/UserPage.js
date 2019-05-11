import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import UserContent from "./UserContent";
import Api from "./Api";
import { string } from "prop-types";

// the parent component of userpage
export default class UserPage extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
        clubs: [],
        user: {}
    };
  }

  async getProfile() {
    const user = await Api.get("/api/user/profile");
    return user;
  }

  async componentDidMount() {
    const { data: user } = await Api.get("/api/user/profile");
    this.setState({ user });
    const { data: clubs } = await Api.get("/api/user/" +
        this.state.user._id +
        "/clubsub"
    );
    this.setState({ clubs: clubs.clubsSubscribed });
  }

  async componentDidMount() {
    const { data: user } = await Api.get("/api/user/profile");
    this.setState({ user });
    const { data: clubs } = await Api.get("/api/user/" +
        this.state.user._id +
        "/clubsub"
    );
    this.setState({ clubs: clubs.clubsSubscribed });
  }

  // renders header and user-content
  render() {
    return (
      <div className="user-page">
        <Header func={this.getProfile} func2={this.props.func} />
        <UserContent user={this.state.user} clubs={this.state.clubs} />
      </div>
    );
  }
}
