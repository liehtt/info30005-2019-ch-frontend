import React, {Component} from 'react';
import {
    Container,
    Card,
    Button,
    Form,
    Col,
    Row
} from 'react-bootstrap';
import {
    NavLink,
    Redirect
} from 'react-router-dom';
import Api from "./Api";
import bgImg from '../images/img-bg.jpg';
import ClubHeader from "./ClubPage";
// relative path to image

export default class EventForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            startTime: "",
            venue: "",
            redirect: false,
            redirectClubPage: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async registerEvent() {

        console.log(this.props.location.state.club);
        await Api.post('/api/club/addEvent', {
            title: this.state.title,
            description: this.state.description,
            startTime: this.state.startTime,
            clubId: this.props.location.state.club._id,
            venue: this.state.venue
        });
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    handleClick() {
      this.setState({redirectClubPage: true});
    }

    async handleSubmit(e) {
        e.preventDefault();
        await this.registerEvent();
        this.setState({redirect: true});
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to='/club/profile' />
        } else if(this.state.redirectClubPage) {
            return <Redirect to='/club/profile' />
        }else {
        return (
            <div className="create-event-page">
                {/*<ClubHeader func={this.getProfile} func2={this.props.func} />*/}
                <img src = {bgImg} className="bg-full-img" alt="background image"/>
                <div>
                    <h1 className="title">Lets create an Event!</h1>
                </div>
                <Container style={{ 'width':'70%'}}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Create Event</Card.Title>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="title">
                                    <Form.Label>Event Title</Form.Label>
                                    <Form.Control placeholder="e.g. Bollywood Festival" value={this.state.title} onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control placeholder="e.g. Dance, Music and Films" value={this.state.description} onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Group controlId="startTime">
                                    <Form.Label>Start Time</Form.Label>
                                    <Form.Control placeholder="e.g. 24 May" value={this.state.startTime} onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group controlId="venue">
                                    <Form.Label>Venue</Form.Label>
                                    <Form.Control placeholder="e.g. Union House" value={this.state.venue} onChange={this.handleChange} />
                                </Form.Group>

                                <Row>
                                <Col  sm={12} lg={6}>
                                <Button className="custom-purple-filled-btn" variant="info" block type="submit">
                                    Submit Form
                                </Button>
                                </Col>
                                <Col  sm={12} lg={6}>
                                <Button className="custom-purple-outline-btn" variant="outline-info" block onClick={this.handleClick}>
                                    Back
                                </Button>
                                </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
    }
}
