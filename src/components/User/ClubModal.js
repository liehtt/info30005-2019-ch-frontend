import React, { Component } from "react";

import {
    Modal,
    Button, Card, Row, Col
} from "react-bootstrap";
import ClubEventCard from "../Club/ClubPage";



export default class ClubModal extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.getClubEventCards = this.getClubEventCards.bind(this);

        this.state = {
            show: false,
            toggleClick: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    getClubEventCards(){

        const clubEvents = this.props.club !== undefined ? this.props.club.eventList: [];
        if(clubEvents.length !== 0 ){
            return(clubEvents.map((e) => {
                return (
                    <h2>{e.title}</h2>
                );
            }))
        }
        else
            return(
                <div className="no-events-created">
                    <h1 className="msg">Looks like the club doesn't have any event yet!</h1>
                </div>

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
                            </Col>
                            <Col sm={12} lg={8} className="club-event-list-col">
                                <h3 className="heading">Events</h3>
                                <Row className="event-list-row">
                                    {this.getClubEventCards()}
                                </Row>
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
