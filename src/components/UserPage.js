import React, { Component } from "react";
import Header from "./Header";
import UserContent from "./UserContent";
import axios from "axios";

class UserPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currUser: {}
    };
  }

  componentDidMount() {
    axios.get("https://info30005-2019-ch.herokuapp.com/api/user/0")
        .then(res => {
            this.setState({currUser: res.data});
        })
  }

  render() {
    return (
      <div className="user-page">
        <Header user={this.state.currUser} />
        <UserContent user={this.state.currUser} />
      </div>
    );
  }
}

export default UserPage;
