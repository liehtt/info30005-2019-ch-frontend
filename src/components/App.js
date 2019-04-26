import React, {Component} from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
    constructor() {
        super();
        this.state = {
            username: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        axios.get('https://info30005-2019-ch.herokuapp.com/api/user/1')
            .then(response => this.setState({username: response.data.name}))
    }

    render() {
        return (
            <div className='button_container'>
                <button className='button' onClick={this.handleClick}>
                    Click me
                </button>
                <p>{this.state.username}</p>
            </div>
        );
    }
}

export default App;
