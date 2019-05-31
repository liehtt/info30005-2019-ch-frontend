import React, { Component } from "react";
import Header from "./Header";
import Api from "./Api";

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
          { this.state.events.map(e => {
            return (
              <p>{e.title}</p>
            )
          })}
        </div>
      );
    }

};
