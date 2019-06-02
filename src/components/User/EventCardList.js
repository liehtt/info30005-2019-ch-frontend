import React, { Component } from "react";
import {
    Container,
    Row
} from "react-bootstrap";
import EventCard from "../User/EventCard";


export default class EventCardList extends Component {

    constructor(props) {
        super(props);
        this.state = {list: []};
        this.getEventCards = this.getEventCards.bind(this);

    }

    componentDidMount() {
        const list = this.props.userClubs;
        this.setState({ list });
    }

    getEventCards(){
        const events = this.props.events;
        if(events.length !== 0 ){
            return(this.props.events.map(e => {
                return (
                    <EventCard
                        thisEvent={e}
                        addEvent={this.props.addEvent}
                        user={this.props.user}
                        key={e._id}
                    />
                );
            }))
        }
        else
            return(
                <div className="no-events-to-register">
                    <h1  className="msg">Looks like you've registered to all events already! You social bumble bee!</h1>
                </div>

            );
    }


    render() {


            return (
                <div className="event-container">
                <h3 className="container-title">{this.props.title}</h3>
                <Container className="browse-container-fluid">
                <Row className="event-list-row">
                  {this.getEventCards()}
                </Row>
                </Container>
                </div>
            );


    }
}
