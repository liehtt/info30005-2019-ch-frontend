import React, {Component} from 'react'
import {Card, Figure, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class EventCard extends Component {
    constructor(props) {
        super(props);
    }

    render () {

    return(
        <div>
        <h3 className="container_title">{this.props.title}</h3>
        <div className="container_item">
        {this.props.list.map((event)=> {
                return (
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{event.name}</Card.Title>
                        <Card.Text>{event.description}</Card.Text>
                        <Card.Text>{event.venue}</Card.Text>
                    </Card.Body>
                    </Card>
                );
            })}
        </div>
        </div>
        )
    }
}
