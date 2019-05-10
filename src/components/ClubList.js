import React, { Component } from "react";
import ClubCard from "./ClubCard";
import { Container, Row } from "react-bootstrap";

class ClubList extends Component {
  state = {
    list: []
  };
  componentDidMount() {
    const list = this.props.userClubs;
    this.setState({ list });
    console.log("CL: ", this.state.list);
  }

  render() {
    console.log(this.props.userClubs);
    return (
      <div className="event-container">
        <h3 className="container-title">{this.props.title}</h3>
        <Container class="container-fluid">
          <Row>
            {this.state.list.map(e => {
              return <ClubCard thisClub={e} />;
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default ClubList;
