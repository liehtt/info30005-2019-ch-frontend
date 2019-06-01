import React, { Component } from "react";
import {
    Card, Col, Button, ListGroup
} from "react-bootstrap";
import Api from '../Api';

export default class UserClubCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggleClick: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.removeClub = this.removeClub.bind(this);
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

  render() {
    const club = this.props.thisClub;
    return (
      <div>
        <Col sm={4} className="col">
          <Card bg="light" className="user-club-card">
            <Card.Body>
              <Card.Title>{club.clubname}</Card.Title>
              <Card.Body className="club-card-body">
                <div className="toggle-button">
                  <Button className="custom-purple-filled-btn" variant="info" onClick={this.handleClick} block>
                    {this.state.toggleClick ? "How dare you!" : "Leave Club"}
                  </Button>
                </div>
              </Card.Body>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}
