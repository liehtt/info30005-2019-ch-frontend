import React, { Component } from "react";
import {  Button } from "react-bootstrap";
import { Redirect } from 'react-router-dom';

export default class UserEventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
      redirectBack: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({event: this.props.location.state.event});
  }

  handleClick() {
    this.setState({redirectBack: true});
  }
  render() {
    if(this.state.redirectBack) {
      if(this.props.location.state.str.localeCompare("user") === 0) {
        return (<Redirect to='/user/profile' />);
      } else {
        return (<Redirect to='/events' />);
      }
    }
    return (
      <div>
        <p>{this.state.event.title}</p>
        <Button onClick={this.handleClick}>
          Back
        </Button>
      </div>
    )
  }
}
