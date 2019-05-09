import React, {Component} from 'react';
import {
    Container,
    Card,
    Button,
    Form
} from 'react-bootstrap';
import Api from './Api';
import { NavLink } from 'react-router-dom';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return (this.state.email.length > 0 && this.state.password.length > 0);
    }

    async authenticateUser() {
        const authData = await Api.post('/api/user/authenticate', {
            studentemail: this.state.email,
            password: this.state.password
        });

        return authData;
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    async handleSubmit(e) {
        e.preventDefault();
        const auth = await this.authenticateUser();
        if(!auth.data.success) {
            alert("authentication-failed");
        } else {
            alert("Good to go");
            this.props.func();
        }
    }

    render() {
        return (
            <div className="login-page">
            <Container style={{ width:'25rem'}}>
                <Card>
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="e.g. username@student.edu" value={this.state.email} onChange={this.handleChange}/>
                        <Form.Text className="text-muted">Made-up email is good to go</Form.Text>
                        </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="info" type="submit" disabled={!this.validateForm()}>
                        Submit
                    </Button>
                    </Form>
                </Card.Body>
                </Card>
            </Container>
            </div>
        );
    }
}
