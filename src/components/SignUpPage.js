import React, {Component} from 'react';
import {
    Container,
    Col,
    Card,
    Button,
    Form
} from 'react-bootstrap';
import axios from "axios";

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

        // const newUser = {
        //     username: this.state.username,
        //     studentid: this.state.studentid,
        //     studentemail: this.state.studentemail,
        //     password: this.state.password
        // };
        // await axios({
        //     method: 'post',
        //     url: 'https://mighty-coast-68940.herokuapp.com/api/user/create',
        //     params: {
        //         username: this.state.username,
        //         studentid: this.state.studentid,
        //         studentemail: this.state.studentemail,
        //         password: this.state.password
        //         'Accept': 'application/json',
        //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        //     }
        // })
        return await axios.post('https://mighty-coast-68940.herokuapp.com/api/user/create/', JSON.stringify({
            username: this.state.username,
                studentid: this.state.studentid,
                studentemail: this.state.studentemail,
                password: this.state.password
        }));
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    async handleSubmit(e) {
        e.preventDefault();
        const userData = await this.registerUser();
        alert(userData.data);
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

                        <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}
