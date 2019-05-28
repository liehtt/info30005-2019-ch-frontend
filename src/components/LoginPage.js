import React, {Component} from 'react';
import logo from '../images/border-logo.svg' // relative path to image
import video from '../lowlightvideo.mp4'
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
import Api from './Api';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirect: false,
            redirectRegClub: false,
            redirectLogClub: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.tryAuthenticate = this.tryAuthenticate.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickRegClub = this.handleClickRegClub.bind(this);
        this.handleClickLogClub = this.handleClickLogClub.bind(this);

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
            alert("Your login was successful!");
            this.props.func();
        }
    }

    handleClick() {
        this.setState({redirect: true});
    }

    handleClickRegClub() {
        this.setState({redirectRegClub: true});
    }

    handleClickLogClub() {
        this.setState({redirectLogClub: true});
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to='/register/user'/>
        } else if (this.state.redirectRegClub){
            return <Redirect to='/register/club' />
        } else if (this.state.redirectLogClub){
            return <Redirect to='/club/login' />
        } else{
        return (
            <div className="login-page">

            <video autoPlay muted loop id="loginPageVideo">
                <source src={video} type="video/mp4"/>
            </video>

            {/*<h1 class="login-brand">Clubhub</h1>*/}

            <Container style={{ width:'25rem'}}>
                <div className ="logo-container">
                    <img src = {logo} alt="logo" width="150px" />
                </div>

                <Card id="login-card">
                <Card.Body>
                    <Card.Title>User Login</Card.Title>
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
                    <Col sm={12} lg={6}>
                    <Button className="custom-purple-filled-btn" variant="info" onClick={this.tryAuthenticate} disabled={!this.validateForm() } size="lg" block>
                        Submit
                    </Button>
                    </Col>
                    <Col sm={12} lg={6}>
                    <Button className="custom-purple-outline-btn" variant="outline-info" onClick={this.handleClick}  size="lg" block>
                        New User?
                    </Button>
                    </Col>
                    </Row>
                    </Form>
                </Card.Body>
                </Card>
                <Button id="clubButton" variant="outline-primary" size="lg" block onClick={this.handleClickLogClub}>
                  Club Login
                </Button>
                {/*<Container className="club-register-button">*/}
                {/*<Card>*/}
                {/*<Col md={{ offset: 1 }}>*/}
                    {/*<Button style={{ margin:'5px'}} variant="outline-info" onClick={this.handleClickRegClub}>*/}
                        {/*Register Club*/}
                    {/*</Button>*/}
                    {/*<Button variant="outline-info" onClick={this.handleClickLogClub}>*/}
                        {/*Club Login*/}
                    {/*</Button>*/}
                {/*</Col>*/}

                {/*</Card>*/}

                {/*</Container>*/}
            </Container>
            </div>
        );}
    }
}
