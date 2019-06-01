import React, { Component } from "react";
import Header from "./Header";
import Api from "./Api";
import ClubList from "./ClubList";

export default class BrowseClubPage extends Component {

    constructor(props) {
      super(props);
      this.state = {
          userClubs: [],
          allClubs: [],
          displayClubs: []
      }
      this.registerUserToClub = this.registerUserToClub.bind(this);
    }

    async getProfile() {
      const user = await Api.get("/api/user/profile");
      return user;
    }

    async registerUserToClub(clubId) {
      const { data: user } = await Api.get("/api/user/profile");
      this.setState({ user });
      const retr = await Api.post("/api/user/addClub", {
          club: clubId,
          userId: user._id
      });
      const retr2 = await Api.post("/api/club/addMember", {
        clubId: clubId,
        userId: user._id
      }); 
    }

    async componentDidMount() {

      const { data: user } = await Api.get("/api/user/profile");
      this.setState({ user });

      const { data: userClubs } = await Api.get("/api/user/" +
          this.state.user._id +
          "/clubsub"
      );

      const { data: allClubs } = await Api.get("/api/clubs");
      this.setState({ userClubs: userClubs.clubsSubscribed, allClubs });

      const userClubsSubscribed = user.clubsSubscribed;
      const displayClubs = allClubs.filter(function(c) {
          return userClubsSubscribed.indexOf(c._id) === -1;
      })
      this.setState({ displayClubs });
    }

    render() {
      return (
        <div className="user-content">
          <Header func={this.getProfile} func2={this.props.func} />
          <ClubList
            title="Browse Clubs"
            clubs={this.state.displayClubs}
            addClub={this.registerUserToClub}
            str="browse"
          />
        </div>
      );
    }

};
