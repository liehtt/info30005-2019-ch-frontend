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

export default class ClubLoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.tryAuthenticateClub = this.tryAuthenticateClub.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    validateForm() {
        return (this.state.email.length > 0 && this.state.password.length > 0);
    }


    async authenticateClub() {
        const authData = await Api.post('/api/club/authenticate', {
            clubemail: this.state.email,
            password: this.state.password
        });

        return authData;
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    async tryAuthenticateClub() {
        const auth = await this.authenticateClub();

        if(!auth.data.success) {
            alert("authentication-failed");
        } else {
            alert("Hey Club! Good to go");
            this.props.func();
        }
    }

    handleClick() {
        this.setState({redirect: true});
    }


    render() {
        if(this.state.redirect) {
                return <Redirect to='/register/club'/>
        } else {
            return (
                <div className="club-login-page">
                    <Container style={{width: '25rem'}}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Club Login</Card.Title>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="email">
                                        <Form.Label>Club Email address</Form.Label>
                                        <Form.Control type="email" placeholder="e.g. clubname@gmail.com"
                                                      value={this.state.email} onChange={this.handleChange}/>
                                        <Form.Text className="text-muted">Made-up email is good to go</Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" value={this.state.password}
                                                      onChange={this.handleChange}/>
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Button variant="info" onClick={this.tryAuthenticateClub}
                                                    disabled={!this.validateForm()}>
                                                Submit
                                            </Button>
                                        </Col>
                                        <Col md={{offset: 3}}>
                                            <Button variant="outline-info" onClick={this.handleClick}>
                                                Register Club
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
            );
        }
    }
}
