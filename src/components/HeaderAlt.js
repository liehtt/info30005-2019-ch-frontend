import React, {Component} from 'react'
import Nav from 'react-bootstrap/Nav';

export default class HeaderAlt extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
            <Nav fill variant="tabs">
              <Nav.Item>
                <Nav.Link class="link" href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link class="link" href="/">Notifications</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link class="link" href="/">Browse Clubs</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link class="link" href="/">Browse Events</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link class="link" href="/">Settings</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        );
    }
}