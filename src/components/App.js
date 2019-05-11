import React, {Component} from 'react';
import UserPage from './UserPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import BrowseClubPage from './BrowseClubPage';
import ClubLoginPage from './ClubLoginPage';
import ClubSignUpPage from './ClubSignUpPage';
import ClubPage from './ClubPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            registered: false,
            clubLoggedIn: false,
            clubRegistered: false
        }
        this.authenticate = this.authenticate.bind(this);
        this.unauthenticate = this.unauthenticate.bind(this);
        this.registered = this.registered.bind(this);
        this.clubAuthenticate = this.clubAuthenticate.bind(this);
        this.clubUnauthenticate = this.clubUnauthenticate.bind(this);
        this.clubRegistered = this.clubRegistered.bind(this);
    }

    authenticate() {
        this.setState({loggedIn: true});
        this.setState({registered: true});
    }

    unauthenticate() {
        this.setState({loggedIn: false});
        this.setState({registered: false});
    }

    registered() {
        this.setState({registered: true});
    }

    clubAuthenticate() {
        this.setState({clubLoggedIn: true});
        this.setState({clubRegistered: true});
    }

    clubUnauthenticate() {
        this.setState({clubLoggedIn: false});
        this.setState({clubRegistered: false});
    }

    clubRegistered() {
        this.setState({clubRegistered: true});
    }


    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' render={(props) => (
                            this.state.loggedIn ?
                            (<Redirect to='/user/profile'/>) :
                            (<LoginPage {...props} func={this.authenticate}/>)
                        )}/>
                        <Route exact path='/register/user' render={(props) => (
                            this.state.registered ?
                            (<Redirect to='/'/>) :
                            (<SignUpPage {...props} func={this.registered}/>)
                        )}/>
                        <Route exact path='/user/profile' render={(props) => (
                            !this.state.loggedIn ?
                            (<Redirect to='/'/>) :
                            (<UserPage {...props} func={this.unauthenticate}/>)
                        )}/>
                        <Route exact path='/club/login' render={(props) => (
                            this.state.clubLoggedIn ?
                            (<Redirect to='/club/profile'/>) :
                            (<ClubLoginPage {...props} func={this.clubAuthenticate}/>)
                        )}/>
                        <Route exact path='/register/club' render={(props) => (
                            this.state.clubRegistered ?
                            (<Redirect to='/club/login'/>) :
                            (<ClubSignUpPage {...props} func={this.clubRegistered}/>)
                        )}/>
                        <Route exact path='/club/profile' render={(props) => (
                            !this.state.clubLoggedIn ?
                            (<Redirect to='/club/login'/>) :
                            (<ClubPage {...props} func={this.clubUnauthenticate}/>)
                        )}/>
                        <Route exact path='/clubs' render={(props) => (
                            !this.state.loggedIn ?
                            (<Redirect to='/'/>) :
                            (<BrowseClubPage {...props} func={this.unauthenticate}/>)
                        )}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
