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
        this.state = {list: []}
    }

    async componentDidMount() {
        const list = await this.props.func();
        this.setState({list: list});
    }

    render () {
        return(
            <div className="event-container">
            <h3 className="container-title">
                {this.props.title}
            </h3>
            <Container class="container-fluid">
            <Row>
                {this.state.list.map((e) => {
                    return (
                        <EventCard currEvent={e} />
                    );
                })}
            </Row>
            </Container>
            </div>
        );
    }
}
