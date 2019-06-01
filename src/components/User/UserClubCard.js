import React, { Component } from "react";
import {
    Card, Col, Button, ListGroup
} from "react-bootstrap";
import Api from '../Api';
import { Redirect } from 'react-router-dom';

export default class UserClubCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggleClick: false,
      redirectClick: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.removeClub = this.removeClub.bind(this);
    this.redirectClick = this.redirectClick.bind(this);
  }

  async removeClub() {
    const {data: user} = await Api.get('/api/user/profile');
    const userId = user._id;
    const clubId = this.props.thisClub._id;
    const rtr = await Api.post('/api/user/removeClub', {
      clubId: clubId,
      userId: userId
    });
    const rtn2 = await Api.post('/api/club/removeMember', {
      clubId: clubId,
      userId: userId
    });
  }

  handleClick() {
    this.setState({toggleClick: true});
    this.removeClub();
  }

  redirectClick() {
    this.setState({redirectClick: true});
  }

  render() {
    const club = this.props.thisClub;
    if(this.state.redirectClick) {
      return (<Redirect to={{
        pathname: '/user/checkClub',
        state: {club: club, str: "user"}
      }}  />)
    }
    return (
      <div>
        <Col sm={4} className="col">
          <Card bg="light" className="user-club-card">
            <Card.Body>
              <Card.Title>
                <Button className="leave-btn" variant="info" onClick={this.redirectClick} block>
                  {club.clubname}
                </Button>
              </Card.Title>
              <Card.Body className="club-card-body">
                <div className="toggle-button">
                  <Button className="custom-purple-filled-btn" variant="info" onClick={this.handleClick} block>
                    {this.state.toggleClick ? "How dare you!" : "Leave Club"}
                  </Button>


                </div>
              </Card.Body>
              {/*<a href="" onClick={this.redirectClick} className="stretched-link">Click this </a>*/}
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}
