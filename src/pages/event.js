import React from 'react';
import './event.css';
import { ReactComponent as Duck } from '../images/graphics/white-duck.svg';

// TODO: Replace this with the actual hackTAMS database
const imageDb = 'https://api.michaelzhao.xyz/static/hacktams';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdown: false, toggle: 'left' };
    }

    toggleDropdown = () => {
        this.setState({ dropdown: !this.state.dropdown });
    };

    changeSwitch = (dir) => {
        this.setState({ toggle: dir });
    };

    formatInfo = (data) => {
        let numbers = ` • ${data.participants} participants • ${data.projects} projects`;
        if (data.participants === undefined || data.projects === undefined) {
            numbers = ` • Hackathon coming soon!`;
        }
        return `${data.dates}${numbers}`;
    };

    createOrganizersList = (team) => {
        return team.map((t, i) => (
            <div className="organizer-group" key={`${i}-${t.name}`}>
                <img className="organizer-img" src="" alt={t.name}></img>
                <Duck className="organizer-img-placeholder"></Duck>
                <p className="organizer-name">{t.name}</p>
                <p className="organizer-position">{t.position}</p>
            </div>
        ));
    };

    render() {
        const data = require(`../data/${this.props.year}.json`);
        const info = this.formatInfo(data);
        const organizersList = this.createOrganizersList(data.team);

        const hasDevpost = data.devpost ? '' : 'hidden';
        const hasWebsite = data.site ? '' : 'hidden';

        return (
            <div className="event">
                <img
                    className="event-header"
                    alt={`${this.props.year} header`}
                    src={`${imageDb}/${this.props.year}.png`}
                    onClick={this.toggleDropdown}
                ></img>
                <div className={`event-dropdown ${this.state.dropdown ? 'active' : ''}`}>
                    <p className="event-dropdown-info">{info}</p>
                    <div className="event-dropdown-button-container">
                        <div className="event-dropdown-switch-container">
                            <div className={`event-dropdown-switch-back ${this.state.toggle}`}></div>
                            <button
                                className={`event-dropdown-switch left ${this.state.toggle}-active`}
                                onClick={this.changeSwitch.bind(this, 'left')}
                            >
                                Organizers
                            </button>
                            <button
                                className={`event-dropdown-switch right ${this.state.toggle}-active`}
                                onClick={this.changeSwitch.bind(this, 'right')}
                            >
                                Sponsors
                            </button>
                        </div>
                        <a className={`event-dropdown-link devpost ${hasDevpost}`} href={data.devpost}>
                            Devpost
                        </a>
                        <a className={`event-dropdown-link website ${hasWebsite}`} href={data.site}>
                            Website
                        </a>
                    </div>
                    <div className={`event-dropdown-section organizers ${this.state.toggle}`}>
                        <div className="event-organizers-list">{organizersList}</div>
                    </div>
                    <div className={`event-dropdown-section sponsors ${this.state.toggle}`}>
                        <div className="event-sponsors">Sponsors WIP</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;
