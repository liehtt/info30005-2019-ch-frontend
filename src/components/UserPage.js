import React, {Component} from 'react';
import Header from './Header';
import LeftContent from './LeftContent';

class UserPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user_page">
                <Header />
                <LeftContent />
            </div>
        );
    }
}

export default UserPage;
