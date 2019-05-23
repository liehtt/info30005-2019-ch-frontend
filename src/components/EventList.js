import React, { Component } from "react";
import EventListItem from "./EventListItem";
import { Container, Row } from "react-bootstrap";

class EventList extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  componentDidMount() {
    const list = this.props.events;
    this.setState({ list });
  }

  render() {
    console.log(this.state.list);
    return (
      <div className="club-container">
        <h3 className="container-title">{this.props.title}</h3>
        <Container className="container-fluid">
          <Row>
            {this.props.events.map(e => {
              return <EventListItem thisEvent={e} />;
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default EventList;
