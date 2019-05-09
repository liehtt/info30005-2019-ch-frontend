import React, {Component} from 'react';
import {
    Container,
    Card,
    Button,
    Form
} from 'react-bootstrap';
import {
    NavLink
} from 'react-router-dom';
import Api from "./Api";

export default class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            studentid: "",
            studentemail: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    async handleSubmit(e) {
        e.preventDefault();
        await this.registerUser();
        this.props.func();
    }

    render() {
        return (
            <div className="sign-up">
                <Container style={{ width:'50rem'}}>
                    <Card>
                    <Card.Body>
                    <Card.Title>Register User</Card.Title>
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

                        <Button variant="outline-dark" type="submit">
                            Submit Form
                        </Button>
                        </Form>
                    </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}
