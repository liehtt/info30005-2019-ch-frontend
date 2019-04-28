import React, { Component } from "react";
import Header from "./Header";
import LeftContent from "./LeftContent";
import axios from "axios";

class UserPage extends Component {
  state = {
    currUser: {}
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const { data: currUser } = await axios.get(
      "https://info30005-2019-ch.herokuapp.com/api/user/0"
    );
    this.setState({ currUser });
    //console.log(currUser);
  }

  render() {
    return (
      <div className="user_page">
        <Header user={this.state.currUser} />
        <LeftContent user={this.state.currUser} />
      </div>
    );
  }
}

export default UserPage;
