import React, {Component} from 'react';
import {
    Container,
    Col,
    Card, 
    Button, 
    Form
} from 'react-bootstrap';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "", 
            password: ""
        }
    }

    render() {
        return (
            <div>
            <Container style={{ width:'25rem'}}>
                <Card>
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Form>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="e.g. username@student.edu" value={this.state.email}/>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Login
                    </Button>
                    </Form>
                </Card.Body>
                </Card>
            </Container>
            </div>
        );
    }
}
