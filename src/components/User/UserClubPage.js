import React, { Component } from "react";
import { Card, Col, Button, ListGroup } from "react-bootstrap";
import { Redirect } from 'react-router-dom';

export default class UserClubPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      club: {},
      redirectBack: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({club: this.props.location.state.club});
  }

  handleClick() {
    this.setState({redirectBack: true});
  }
  render() {
    if(this.state.redirectBack) {
      if(this.props.location.state.str.localeCompare("user") === 0) {
        return (<Redirect to='/user/profile' />);
      } else {
        return (<Redirect to='/clubs' />);

      }
    }
    return (
      <div>
        <p>{this.state.club.clubname}</p>
        <Button onClick={this.handleClick}>
          Back
        </Button>
      </div>
    )
  }
}
