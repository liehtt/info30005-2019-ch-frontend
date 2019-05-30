import React, { Component } from "react";
import ClubHeader from "./ClubHeader";
import {
    Container,
    Card,
    Button,
    Form,
    Row,
    Col,
    Image
} from 'react-bootstrap';
import {
    NavLink,
    Redirect
} from 'react-router-dom';
import Api from "./Api";
import headingImg from '../images/img-bg.jpg';// relative path to image


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
            state: { club: this.state.club }
        }}
/>
        } else {
        return (
            <div className="club-page">
                <ClubHeader func={this.getProfile} func2={this.props.func} />
                <div className="header-div">
                    <img src = {headingImg} className="header-image"/>
                    <h1 className="welcome-text">Hello</h1>
                    <h1 className="header-text">{this.state.club.clubname}</h1>
                    <Button className="custom-white-outline-btn create-event-btn" onClick={this.handleClick}>Create an Event</Button>

                </div>

                <h3>Description</h3>
                <p>{this.state.club.description}</p>
                <h3>Contact</h3>
                <p>{this.state.club.contact}</p>
                <h3>Events</h3>
                {this.state.event.map((e) => (<Card>{e.title}</Card>))}

            </div>
        );
        }
    }
}
