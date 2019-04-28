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

        this.state = {
            toggleClick: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state, props) => ({
            toggleClick: !state.toggleClick
        }));
    }

    render () {
        const currEvent = this.props.currEvent;
        return(
            <div className="event-card">
            <Col sm={4} class="col">
            <Card bg='light' style={{ width: '18rem' }} class="event-card">
                <Card.Body>
                    <Card.Title>{currEvent.name}</Card.Title>
                    <Card.Text>{currEvent.club}</Card.Text>
                    <Card.Text>{currEvent.venue}</Card.Text>
                    <Card.Text>{currEvent.startTime} - {currEvent.endTime}</Card.Text>
                    <Card.Text>{currEvent.description}</Card.Text>
                    <Button onClick={this.handleClick}>{this.state.toggleClick ? "Going" : "Register Event"}</Button>
                </Card.Body>
            </Card>
            </Col>
            </div>
        );
    }
}
