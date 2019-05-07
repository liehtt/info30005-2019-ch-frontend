import React, {Component} from 'react';
import UserPage from './UserPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUserPage: false,
            showLoginPage: true,
            showSignUpPage: false
        }

        this.triggerLoginPage = this.triggerLoginPage.bind(this);
        this.triggerUserPage = this.triggerUserPage.bind(this);

    }

    triggerLoginPage() {
        this.setState({
            showLoginPage: true,
            showUserPage: false,
            showSignUpPage: false
        });
    }

    triggerUserPage() {
        this.setState({
            showLoginPage: false,
            showUserPage: true,
            showSignUpPage: false
        })
    }

    render() {
        if(this.state.showUserPage) {
            return (<UserPage />);
        } else if(this.state.showLoginPage) {
            return (<LoginPage func={this.triggerUserPage} />);
        } else if(this.state.showSignUpPage) {
            return (<SignUpPage func={this.triggerLoginPage}/>);
        }
    }
}
