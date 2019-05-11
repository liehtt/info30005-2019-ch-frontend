import React, { Component } from "react";
import {
    Card, Col, Button, ListGroup
} from "react-bootstrap";

export default class ClubCard extends Component {

  constructor(props) {
    super(props);

    this.state = { toggleClick: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ toggleClick: true });
    const clubId = this.props.thisClub._id;
    this.props.addClub(clubId);
  }

  async componentDidMount() {}

  render() {
    const club = this.props.thisClub;
    const user = this.props.user;
    return (
      <div className="club-card">
        <Col sm={4} className="col">
          <Card bg="light" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{club.clubname}</Card.Title>
              <Card.Body>
                <div className="toggle-button">
                  <Button variant="info" onClick={this.handleClick}>
                    {this.state.toggleClick ? "Joined!" : "Join Club"}
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
