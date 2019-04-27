import React, {Component} from 'react';
import LeftContainer from './LeftContainer';
import EventCard from './EventCard'
import axios from 'axios';

export default class LeftContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clubsInterested: [],
            eventsGoing: []
        };
    }

    getClubsInterested() {
        axios.get("https://info30005-2019-ch.herokuapp.com/api/clubs")
            .then(response => this.setState({clubsInterested: response.data}));
    }

    getEventsGoing() {
        axios.get("https://info30005-2019-ch.herokuapp.com/api/events")
            .then(response => this.setState({eventsGoing: response.data}));
    }

    render() {
        this.getClubsInterested(); 
        this.getEventsGoing();
        const clubs = this.state.clubsInterested.map(club => club.name);
        const events = this.state.eventsGoing;
        const eventClub = this.state.eventsGoing.map(e => e.club);

        return (
            
            <div className="left_content">
                <LeftContainer title="Clubs Interested" list={clubs} />
                <LeftContainer title="Events Joined" list={events} />
            </div>
        /* can someone figure out why EventCard.js is not rendering properly lol
           <div>
               <EventCard title="Events Joined" list={events}></EventCard>
           </div>
        );
        */
    );
}
}



