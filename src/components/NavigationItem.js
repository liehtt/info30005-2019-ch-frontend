import React, {Component} from 'react';
import './NavigationItem.css'

class NavigationItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='nav_item'>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default NavigationItem;
