import React, { Component } from "react";
import {
    Card, Col
} from "react-bootstrap";

export default class ClubEventCard extends Component {

  render() {
    const event = this.props.thisEvent;
    return (
      <div>
        <Col sm={4} className="col">
          <Card bg="light" className="club-event-card">
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}
