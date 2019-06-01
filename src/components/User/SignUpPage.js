import React, {Component} from 'react';
import {
    Container,
    Card,
    Button,
    Form
} from 'react-bootstrap';
import {
    Redirect,
    NavLink
} from 'react-router-dom';
import Api from "../Api";
import video from "../../lowlightvideo.mp4";
import logo from "../../images/border-logo.svg";

export default class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            studentid: "",
            studentemail: "",
            password: "",
            toLogin: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async registerUser() {

        await Api.post('/api/user/create', {
            username: this.state.username,
            studentid: this.state.studentid,
            studentemail: this.state.studentemail,
            password: this.state.password
        });
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    handleClick() {
      this.setState({toLogin: true});
    }

    async handleSubmit(e) {
        e.preventDefault();
        await this.registerUser();
        this.props.func();
    }

    render() {
      if(this.state.toLogin) {
        return (<Redirect to='/' />)
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
                    <Card.Title>Register New User</Card.Title>
                        <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="e.g. xdcaptain" value={this.state.username} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="studentid">
                        <Form.Label>StudentID</Form.Label>
                        <Form.Control placeholder="e.g. 402123" value={this.state.studentid} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="studentemail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.studentemail} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
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
