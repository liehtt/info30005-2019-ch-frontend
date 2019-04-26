import React, {Component} from 'react'
import NavigationItem from './NavigationItem'
import DarkMode from './DarkMode'


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="header">
                <NavigationItem name="Home" />
                <NavigationItem name="Notifications" />
                <NavigationItem name="Browse Clubs" />
                <NavigationItem name="Browse Events" />
                <NavigationItem name="Settings" />
                <DarkMode />
            </div>
        );
    }
}

export default Header;
