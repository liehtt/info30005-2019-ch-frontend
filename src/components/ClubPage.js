import React, { Component } from "react";
import ClubHeader from "./ClubHeader";
import Api from "./Api";

export default class ClubPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            club: {},
            members: []
        };
    }

    async componentDidMount() {
        const { data: club } = await Api.get("/api/club/profile");
        this.setState({ club });

    }

    async getProfile() {
        const club = await Api.get("/api/club/profile");
        return club;
    }


    // renders header and user-content
    render() {
        const club = this.getProfile();
        return (
            <div className="club-page">
                <ClubHeader func={this.getProfile} func2={this.props.func} />
                <h1>THIS IS CLUB PAGE</h1>
                <h3>Description</h3>
                <p>{club.description}</p>
                <h3>Contact</h3>
                <p>{club.contact}</p>
            </div>
        );
    }
}
