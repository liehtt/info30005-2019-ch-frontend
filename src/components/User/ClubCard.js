import React, { Component } from "react";
import { Card, Col, Button, ListGroup } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import ClubModal from "./UserClubCard";

export default class ClubCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleClick: false,
      redirectClubPage: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.redirectClick = this.redirectClick.bind(this);
  }

  handleClick() {
    this.setState({ toggleClick: true });
    const clubId = this.props.thisClub._id;
    this.props.addClub(clubId);
  }

  redirectClick() {
    this.setState({ redirectClubPage: true});
  }

  async componentDidMount() {
    const img =
      "https://picsum.photos/id/" +
      Math.floor(Math.random() * 200).toString() +
      "/200/200";

    this.setState({ imgSource: img });
  }

  render() {
    const club = this.props.thisClub;
    const user = this.props.user;

    // if(this.state.redirectClubPage) {
    //   return (<Redirect to={{
    //     pathname: '/user/checkClub',
    //     state: {club: club, str: "browse"}
    //   }}  />)
    // } else
    // {
      return (
        <div className="club-card-div">
          <Col sm={4} className="col">
            <Card className="club-card" bg="light" style={{ width: "18rem" }}>
              <img src={this.state.imgSource} className="card-image-top" />
              <Card.Body>
                <Card.Title>
                  {/*<ClubModal club={this.props.thisClub} />*/}
                </Card.Title>
                <Card.Body>
                  <div className="toggle-button">
                    <Button className="custom-purple-filled-btn" variant="info" onClick={this.handleClick} block>
                      {this.state.toggleClick ? "Joined!" : "Join Club"}
                    </Button>
                    {/*<Button className="custom-purple-filled-btn" variant="info" onClick={this.redirectClick} block>*/}
                      {/*Check Info*/}
                    {/*</Button>*/}
                  </div>
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
        </div>
      );
    }
  // }
}
