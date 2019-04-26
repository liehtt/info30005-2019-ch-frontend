import React, {Component} from 'react';
//import Header from './Header';
import HeaderAlt from './HeaderAlt';
import LeftContent from './LeftContent';

class UserPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user_page">
                <HeaderAlt />
                <LeftContent />
            </div>
        );
    }
}

export default UserPage;
