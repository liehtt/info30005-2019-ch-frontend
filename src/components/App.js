import React, {Component} from 'react';
import UserPage from './UserPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            registered: false
        }
        this.authenticate = this.authenticate.bind(this);
        this.unauthenticate = this.unauthenticate.bind(this);
        this.registered = this.registered.bind(this);
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


    render() {
        console.log(this.state.loggedIn);
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
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
