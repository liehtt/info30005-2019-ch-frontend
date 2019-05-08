import React, { Component } from "react";
import Header from "./Header";
import UserContent from "./UserContent";

// the parent component of userpage
export default class UserPage extends Component {

  constructor(props) {
    super(props);
  }

  // renders header and user-content
  render() {
    return (
      <div className="user-page">
        <Header userData={this.props.userData}/>
      </div>
    );
  }
}
