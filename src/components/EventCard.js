import React, {Component} from 'react'
import {
    Card,
    Container, 
    Col,
    Row,
    Figure, 
    Button,
    ListGroup,
    ListGroupItem
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
            <Container>
            <Row noGutters="true">
                {events.map((event) => {
                    return (
                        <Col sm={4}>
                        <Container className="grid-card">
                        <Card bg='light' style={{ width: '18rem' }} className="event-card">
                            <Card.Body>
                                <Card.Title>{event.name}</Card.Title>
                                <ListGroup>
                                <ListGroupItem>{event.club}</ListGroupItem>
                                <ListGroupItem>{event.venue}</ListGroupItem>
                                <ListGroupItem>{event.startTime} - {event.endTime}</ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                            <Card.Body>
                            <Button>[Attendance Status]</Button>
                            </Card.Body>
                        </Card>
                        </Container>
                        </Col>
                    );
                })}
            </Row>
            </Container>
            </div>
        );
    }
}
