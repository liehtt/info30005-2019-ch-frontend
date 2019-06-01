import React, { Component } from "react";
import {
    Card, Col, Button, ListGroup
} from "react-bootstrap";
import Api from '../Api';

export default class MemberCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toggleClick: false
    }

    this.handleClick = this.handleClick.bind(this);
  }



  handleClick() {
    this.setState({toggleClick: true});
  }

  render() {
    const member = this.props.thisMember;
    return (
      <div>
        <Col sm={4} className="col">
          <Card bg="light" className="user-club-card">
            <Card.Body>
              <Card.Title>{member}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}
