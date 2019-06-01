import React, { Component } from "react";
import { Card, Col, Button, ListGroup } from "react-bootstrap";
import {Description} from "@material-ui/icons";

export default class EventCard extends Component {
  constructor(props) {
    super(props);

    this.state = { toggleClick: false };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({ toggleClick: true });
    const eventId = this.props.thisEvent._id;
    this.props.addEvent(eventId);
  }



  async componentDidMount() {
    const img =
      "https://picsum.photos/id/" +
      Math.floor(Math.random() * 200).toString() +
      "/200/200";

    this.setState({ imgSource: img });
  }

  render() {
    const event = this.props.thisEvent;
    const user = this.props.user;
    let desc = event.description;
    if(desc.length > 15){
      desc = desc.substring(0,15) + "...";
    }

    return (
      <div className="event-card-div">
        <Col sm={4} className="col">
          <Card className="event-card" bg="light" style={{ width: "18rem" }}>
            <img src={this.state.imgSource} className="card-image-top" alt="event-image"/>
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Body>
                <div> <small className="desc"> Description: {desc} </small></div>
                <div> <small className="venue"> Venue: {event.venue} </small> </div>
                <div className="toggle-button">
                  <Button className="custom-purple-filled-btn" variant="info" onClick={this.handleClick} block>
                    {this.state.toggleClick ? "Registered!" : "Register"}
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
