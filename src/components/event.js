import React from 'react';
import './event.css';

class Event extends React.Component {
    render() {
        return (
            <div className="event">
                <div className="event-header">
                    {/* TODO have year, dates, # of teams, # of projects */}
                </div>
                <div className="event-body">
                    {/* TODO have devpost link, site link, list of People */}
                </div>
            </div>
        );
    }
}

export default Event;
