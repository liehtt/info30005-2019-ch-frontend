import React, {Component} from 'react'
import {
    Card,
    Container,
    Col,
    Row,
    Figure,
    Button,
    ListGroup
} from 'react-bootstrap';
import axios from 'axios';

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
        if(this.state.toggleClick === true) {
            this.registerEvent();
        } else {
            this.unregisterEvent();
        }
    }

    registerEvent() {
        axios.post("https://info30005-2019-ch.herokuapp.com/api/user/:id/regEvent", {
            event: this.props.currEvent.id
        })
    }

    unregisterEvent() {
        axios.post("https://info30005-2019-ch.herokuapp.com/api/user/:id/unregEvent", {
            event: this.props.currEvent.id
        })

    }

    render () {
        const currEvent = this.props.currEvent;
        return(
            <div className="event-card">
            <Col sm={4} class="col">
            <Card bg='light' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{currEvent.name}</Card.Title>
                    <ListGroup>
                    <ListGroup.Item>{currEvent.club}</ListGroup.Item>
                    <ListGroup.Item>{currEvent.venue}</ListGroup.Item>
                    <ListGroup.Item>{currEvent.startTime} - {currEvent.endTime}</ListGroup.Item>
                    </ListGroup>
                <Card.Body>
                    <div class="toggle-button"><Button variant="info" onClick={this.handleClick}>{this.state.toggleClick ? "Going" : "Register Event" }</Button></div>
                </Card.Body>
                </Card.Body>
            </Card>
            </Col>
            </div>
        );
    }
}
