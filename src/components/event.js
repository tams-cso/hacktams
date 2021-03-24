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
        // data.sort((a, b) => (a.name < b.name ? -1 : 1));
        data.forEach((person) => {
            teamlist.push(<Person key={person.name} info={person} />);
        });
        return teamlist;
    };

    createInfo = (info) => {
        if (info === null)
            return (
                <div className="header-info">
                    <p className="header-description-soon">Coming Soon! Check back in late Summer</p>
                </div>
            );
        return (
            <div className="header-info">
                <p className="header-description align-right">{`${info.participants} participants`}</p>
                <div className="header-dot"></div>
                <p className="header-description align-left">{`${info.projects} projects`}</p>
            </div>
        );
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
                        <LinkBox link={data.devpost}>Devpost</LinkBox>
                        <LinkBox link={data.site}>Site</LinkBox>
                    </div>
                    <div className="body-team-list">{teamComponents}</div>
                </div>
            </div>
        );
    }
}

export default Event;
