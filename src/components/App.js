import React, {Component} from 'react';
import UserPage from './UserPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' component={LoginPage} exact />
                        <Route path='/register-user' component={SignUpPage} />
                        <Route path='/user/profile/' component={UserPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
