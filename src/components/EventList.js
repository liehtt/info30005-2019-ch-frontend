import React, {Component} from 'react'
import EventCard from './EventCard';
import {
    Container,
    Row
} from 'react-bootstrap';

// child component of UserContent, showing individual events
export default class EventList extends Component {
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
                        <EventCard currEvent={event}/>
                    );
                })}
            </Row>
            </Container>
            </div>
        );
    }
}
