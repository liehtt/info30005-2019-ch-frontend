import React, { Component } from "react";

import {
    Modal,
    Button, Row, Col
} from "react-bootstrap";
import Api from '../Api';



export default class EventModal extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);


        this.state = {
            show: false,
            toggleClick: false,
            club: {}
        };
    }

    async componentDidMount() {
      const {data: club} = await Api.get('/api/event/clubFrom/' + this.props.thisEvent._id);
      this.setState({club: club.club});
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }


    render() {

        const event= this.props.thisEvent;
        return (
            <div>
                <Button className="club-link-btn" onClick={this.handleShow}>
                    {event.title}
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}
                       size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title className="modal-title">{event.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-body">

                        <Row className="club-pg-row">
                            <Col lg={12} className="modal-event-info-col">
                                <h3 className="heading">Club</h3>
                                <p className="content">{this.state.club.clubname}</p>
                                <h3 className="heading">Description</h3>
                                <p className="content">{event.description}</p>
                                <h3 className="heading">Venue</h3>
                                <p className="content">{event.venue}</p>
                                <h3 className="heading">Start Time</h3>
                                <p className="content">{event.startTime}</p>
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
