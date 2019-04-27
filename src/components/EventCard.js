import React, {Component} from 'react'
import {
    Card,
    Container, 
    Col,
    Row,
    Figure, 
    Button
} from 'react-bootstrap';

export default class EventCard extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        const events = this.props.list;
        return(
            <div className="event-container">
            <h3 className="container-title">
                {this.props.title}
            </h3>
            <Container class="container-fluid">
            <Row>
                {events.map((event) => {
                    return (
                        <Col sm={4} class="col">
                        <Card bg='light' style={{ width: '18rem' }} class="event-card">
                            <Card.Body>
                                <Card.Title>{event.name}</Card.Title>
                                <Card.Text>{event.club}</Card.Text>
                                <Card.Text>{event.venue}</Card.Text>
                                <Card.Text>{event.startTime} - {event.endTime}</Card.Text>
                                <Card.Text>{event.description}</Card.Text>
                                <Button>[Attendance Status]</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                    );
                })}
            </Row>
            </Container>
            </div>
        );
    }
}
