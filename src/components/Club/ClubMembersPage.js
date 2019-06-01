import React, { Component } from "react";
import ClubHeader from "./ClubHeader";
import {
    Container,
    Card,
    Button,
    Form,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import {
    NavLink,
    Redirect
} from 'react-router-dom';
import Api from "../Api";
import ClubList from "../User/ClubList";
import MembersList from "./MembersList";


export default class ClubMembersPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          members:[],
          club: {},
        }
    }

    async componentDidMount() {
      const {data: club} = await Api.get('/api/club/profile');
      this.setState({club: club});
      const {data: members} = await Api.get("/api/club/members/" + this.state.club._id);
      this.setState({members: members});
      console.log(this.state.members);
    }

    async getProfile() {
        const club = await Api.get("/api/club/profile");
        return club;
    }


    render() {
        return(
            <div>
                <ClubHeader func={this.getProfile} func2={this.props.func} />
                <MembersList members={this.state.members}/>
            </div>
        )
    }
}
