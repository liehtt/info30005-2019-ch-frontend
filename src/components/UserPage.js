import React, { Component } from "react";
import Header from "./Header";
import UserContent from "./UserContent";
import Api from "./Api"

// the parent component of userpage
export default class UserPage extends Component {

  constructor(props) {
    super(props);
  }

  async getProfile() {
      const user = await Api.get('/api/user/profile');
      return user;
  }

  // renders header and user-content
  render() {
    return (
      <div className="user-page">
        <Header func={this.getProfile}/>
      </div>
    );
  }
}
