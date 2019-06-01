import React, {Component} from 'react';
import {
    Container,
    Card,
    Button,
    Form
} from 'react-bootstrap';
import {
    NavLink,
    Redirect
} from 'react-router-dom';
import Api from "../Api";
import video from "../../lowlightvideo.mp4";
import logo from "../../images/border-logo.svg";

export default class ClubSignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clubname: "",
            description: "",
            clubemail: "",
            password: "",
            contact: "",
            redirectLogClub: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async registerClub() {

        await Api.post('/api/club/create', {
            clubname: this.state.clubname,
            description: this.state.description,
            clubemail: this.state.clubemail,
            password: this.state.password,
            contact: this.state.contact
        });
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    handleClick() {
      this.setState({redirectLogClub: true});
    }

    async handleSubmit(e) {
        e.preventDefault();
        await this.registerClub();
        this.props.func();
    }

    render() {
        if(this.state.redirectLogClub) {
          return <Redirect to='/club/login' />
        } else {
        return (
            <div className="sign-up">
                <video autoPlay muted loop id="loginPageVideo">
                    <source src={video} type="video/mp4"/>
                </video>
                <Container style={{ width:'25rem'}}>

                    <div className ="logo-container">
                        <img src = {logo} alt="logo" width="150px" />
                    </div>
                    <Card>
                        <Card.Body>
                            <Card.Title>Register Club</Card.Title>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="clubname">
                                    <Form.Label>Club Name</Form.Label>
                                    <Form.Control placeholder="e.g. Bollywood Club" value={this.state.clubname} onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control placeholder="e.g. Dance, Music and Films" value={this.state.description} onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Group controlId="clubemail">
                                    <Form.Label>Club Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={this.state.clubemail} onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                                </Form.Group>

                                <Form.Group controlId="contact">
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control placeholder="e.g. Email, Phone or Website" value={this.state.contact} onChange={this.handleChange} />
                                </Form.Group>


                                <Button className="custom-purple-filled-btn"  variant="outline-dark" type="submit" size="lg" block>
                                    Submit Form
                                </Button>
                                <Button className="custom-purple-filled-btn"  variant="outline-dark" onClick={this.handleClick} size="lg" block>
                                    Back
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
      }
    }
}
