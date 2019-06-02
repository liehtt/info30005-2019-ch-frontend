import React, { Component } from "react";
import ClubHeader from "./ClubHeader";
import {
    Button,
    Row,
    Col
} from 'react-bootstrap';
import {
    Redirect
} from 'react-router-dom';
import Api from "../Api";
import ClubEventCard from "./ClubEventCard";

export default class ClubPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            club: {},
            event: [],
            members: [],
            redirect: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.getEventCards = this.getEventCards.bind(this);
    }

    getEventCards(){
        const events = this.state.event;
        if(events.length !== 0 ){
            return(events.map((e) => {
                return (
                    <ClubEventCard thisEvent={e}/>
                );
            }))
        }
        else
            return(
                <div className="no-events-created">
                    <h1 className="msg">Looks like you've not created any event yet!</h1>
                </div>

            );
    }

    async componentDidMount() {
        const { data: club } = await Api.get("/api/club/profile");
        this.setState({ club });
        const events = await Api.post('api/club/getEventsAdded', {
            clubId: this.state.club._id
        });
        console.log(events.data.eventList);
        this.setState({event: events.data.eventList});

        const img =
            "https://picsum.photos/id/" +
            Math.floor(Math.random() * 200).toString() +
            "/200/200";

        this.setState({ imgSource: img });
    }

    async getProfile() {
        const club = await Api.get("/api/club/profile");
        return club;
    }

    handleClick() {
        this.setState({redirect: true});
    }


    // renders header and user-content
    render() {
        if(this.state.redirect) {
            const club = this.state.club;
            return <Redirect to={{
            pathname: '/club/addEvent',
            state: { club: club }
        }}
/>
        } else {
        return (
            <div className="club-page">
                <ClubHeader func={this.getProfile} func2={this.props.func} />
                <div className="header-div">
                    <h1 className="welcome-text">Hello</h1>
                    <h1 className="header-text">{this.state.club.clubname}</h1>
                    <Button className="custom-white-outline-btn create-event-btn" onClick={this.handleClick}>Create an Event</Button>

                </div>

                <Row className="club-pg-row">
                    <Col sm={12} lg={4} className="club-info-col">
                        <h3 className="heading">Description</h3>
                        <p className="content">{this.state.club.description}</p>
                        <h3 className="heading">Contact</h3>
                        <p className="content">{this.state.club.contact}</p>
                    </Col>
                    <Col sm={12} lg={8} className="club-event-list-col">
                        <h3 className="heading">Events</h3>
                        <Row className="event-list-row">
                            {this.getEventCards()}
                        </Row>
                    </Col>
                </Row>


            </div>
        );
        }
    }
}
