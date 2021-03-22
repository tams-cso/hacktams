import React from 'react';
import './event.css';
import LinkBox from './link-box';
import Person from './person';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdown: false };
    }

    changeDropdown = () => {
        this.setState({ dropdown: !this.state.dropdown });
    };

    createTeamComponents = (data) => {
        const teamlist = [];
        data.forEach((person) => {
            teamlist.push(<Person info={person} />);
        });
        return teamlist;
    };

    createInfo = (info) => {
        const data = [];
        data.push(<p className="header-description">{info.shift()}</p>);
        info.forEach((item) => {
            data.push(<p className="header-description">{item}</p>);
        });
        return data;
    };

    render() {
        const data = require(`../data/${this.props.year}.json`);
        const info = this.createInfo(data.info);
        const teamComponents = this.createTeamComponents(data.team);

        return (
            <div className="event">
                <div className="event-header" onClick={this.changeDropdown}>
                    <div className="header-line"></div>
                    <div className="header-date">
                        <p className="header-year">{data.year}</p>
                        <p className="header-dates">{data.dates}</p>
                    </div>
                    <div className="header-line"></div>
                    {info}
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
