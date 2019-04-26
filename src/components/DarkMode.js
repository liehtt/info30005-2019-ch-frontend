import React, {Component} from 'react';
import './DarkMode.css';

class DarkMode extends Component {
    render() {
        return (
            <label className="dm_switch">
                <input type="checkbox" />
                <span className="slider_round"></span>
            </label>
        );
    }
}

export default DarkMode;
