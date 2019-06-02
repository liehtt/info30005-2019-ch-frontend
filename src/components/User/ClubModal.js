import React, { Component } from "react";

import {
    Modal,
    Button, Card, Row, Col
} from "react-bootstrap";
import ClubEventCard from "../Club/ClubPage";
import Api from '../Api';



export default class ClubModal extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            toggleClick: false,
            events: []
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    async componentDidMount() {
      const {data: clubEvents} = await Api.post('/api/club/getEventsAdded', {
        clubId: this.props.club._id
      })
      const events = clubEvents.eventList;
      this.setState({events: events});
    }

    getClubEventCards(){
        if(this.state.events.length !== 0 ){
            return(
              this.state.events.map((e) => {
                  return (
                      <p key={e._id}>{e.title}</p>
                  );
              })
            );
        }
        else
            return(
              <p className="msg">Looks like the club doesn't have any event yet!</p>
            );
    }

    render() {

        const club= this.props.club;
        return (
            <div>
                <Button className="club-link-btn" onClick={this.handleShow}>
                    {club !== undefined ? club.clubname: "Some Club"}
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}
                       size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="modal-title">{club !== undefined ? club.clubname: "Some Club"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row className="club-pg-row">
                            <Col sm={12} lg={4} className="club-info-col">
                                <h3 className="heading">Description</h3>
                                <p className="content">{club !== undefined ? club.description: "We do random fun things!"}</p>
                                <h3 className="heading">Contact</h3>
                                <p className="content">{club !== undefined ? club.contact: "+1455234423"}</p>
                                <h3 className="heading">Total Members</h3>
                                <p className="content">{club !== undefined ? club.members.length: "11"}</p>
                                <h3 className="heading">Events</h3>
                                {this.getClubEventCards()}
                            </Col>
                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="custom-purple-filled-btn" onClick={this.handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
