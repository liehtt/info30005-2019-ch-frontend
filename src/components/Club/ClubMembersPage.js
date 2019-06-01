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
      if(this.state.members.length === 0) {
        return (
          <div>
            <ClubHeader func={this.getProfile} func2={this.props.func} />
            <p> 1</p>
            <p> 1</p>
            <p>1 </p>
            <p> 1</p>

            <p>No one is joining the club :(</p>

          </div>

        )
      } else {
      return (
        <div>
          <ClubHeader func={this.getProfile} func2={this.props.func} />
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>

          {this.state.members.map((e) =>
                      (<Card>{e.username}</Card>))}

        </div>

      )
    }
    }
}
