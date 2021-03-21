import React from 'react';
import './event.css';
import LinkBox from './link-box';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdown: false };
    }

    changeDropdown = () => {
        this.setState({ dropdown: !this.state.dropdown });
    };

    personbox(name, imageUrl) {
        return (
            <div className="person-box">
                <img src={imageUrl} alt="hackTAMS participant" />
                {name}
            </div>
        );
    }

    createTeamComponents = (year) => {
        //TODO read json files for data
        //use Person component
    };

    render() {
        const teamComponents = this.createTeamComponents(this.props.year);

        return (
            <div className="event">
                <div className="event-header" onClick={this.changeDropdown}>
                    <div className="header-line"></div>
                    <div className="header-date">
                        <p className="header-year">{this.props.year}</p>
                        <p className="header-dates">{this.props.date}</p>
                    </div>
                    <div className="header-line"></div>
                    {/* <div className="header-participants"></div>
                    <div className="header-projects"></div> */}
                </div>
                <div className={`event-body ${this.state.dropdown ? 'down' : ''}`}>
                    <div className="body-links">
                        <LinkBox link="">Devpost</LinkBox>
                        <LinkBox link="">Site</LinkBox>
                    </div>
                    <div className="body-team-list">{teamComponents}</div>
                </div>
            </div>
        );
    }
}

export default Event;
