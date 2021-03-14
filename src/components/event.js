import React from 'react';
import './event.css';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {drop: true};
    }

    changeDropdown = () => {
        this.setState({drop: !this.state.drop});
    }

    render() {
        return (
            <div className="event">
                <div className="event-header" onClick={this.changeDropdown}>
                    {this.props.year}
                    {/* TODO have year, dates, # of teams, # of projects */}
                </div>
                <div className={`event-body ${this.state.drop ? 'drop' : 'no-drop'}`}>
                    {/* TODO have devpost link, site link, list of People */}
                </div>
            </div>
        );
    }
}

export default Event;
