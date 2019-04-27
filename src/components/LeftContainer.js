import React, {Component} from 'react';
import axios from 'axios';

class LeftContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="left_container">
                <p className="container_title">{this.props.title}</p>
                <div className="container_item">
                    {this.props.list.map((x) => {
                        return (<p>{x.name}</p>);
                    })}
                </div>
            </div>
        );
    }
}

export default LeftContainer;
