import React, { Component } from "react";
import { Card, Col, Button, ListGroup } from "react-bootstrap";

class ClubCard extends Component {
  state = {};

  render() {
    const club = this.props.thisClub;
    return (
      <div className="event-card">
        <Col sm={4} class="col">
          <Card bg="light" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{club.clubname}</Card.Title>
              <Card.Body>
                <div class="toggle-button">
                  <Button variant="info" onClick={this.handleClick}>
                    {this.state.toggleClick ? "Going" : "Register Event"}
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

export default ClubCard;
