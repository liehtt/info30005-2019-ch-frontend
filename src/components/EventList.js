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
      <div className="list-group">
        {this.state.list.map(e => {
          return <EventListItem event={e} />;
        })}
      </div>
    );
  }
}

export default EventList;
