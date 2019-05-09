import React, {Component} from 'react';
import {
    Container,
    Card,
    Button,
    Form,
    Row,
    Col
} from 'react-bootstrap';
import {
    NavLink,
    Redirect
} from 'react-router-dom';
import Api from './Api';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirect: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.tryAuthenticate = this.tryAuthenticate.bind(this);
        this.handleClick = this.handleClick.bind(this);

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

    async tryAuthenticate() {
        const auth = await this.authenticateUser();

        if(!auth.data.success) {
            alert("authentication-failed");
        } else {
            alert("Good to go");
            this.props.func();
        }
    }

    handleClick() {
        this.setState({redirect: true});
    }

    render() {
        console.log(this.state.redirect);
        if(this.state.redirect) {
            return <Redirect to='/register/user'/>
        } else{
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
                    <Row>
                    <Col>
                    <Button variant="info" onClick={this.tryAuthenticate} disabled={!this.validateForm()}>
                        Submit
                    </Button>
                    </Col>
                    <Col md={{ offset: 3 }}>
                    <Button variant="outline-info" onClick={this.handleClick}>
                        RegisterUser
                    </Button>
                    </Col>
                    </Row>
                    </Form>
                </Card.Body>
                </Card>
            </Container>
            </div>
        );}
    }
}
