import React, { Component } from "react";
import {
    Card, Col, Button, ListGroup
} from "react-bootstrap";

export default class UserClubCard extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const club = this.props.thisClub;
    return (
      <div className="user-club-card">
        <Col sm={4} className="col">
          <Card bg="light" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{club.clubname}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}
