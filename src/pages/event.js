import React from 'react';
import './event.css';
import { ReactComponent as Duck } from '../images/graphics/white-duck.svg';
import Chart from 'chart.js/auto';

// TODO: Replace this with the actual hackTAMS database
const imageDb = 'https://api.michaelzhao.xyz/static/hacktams';

// Color preview: https://coolors.co/e76f51-f4a261-e9c46a-2a9d8f-3b429f-2b2d42-5d737e-095256-634b66
const possibleColors = [
    '#e76f51',
    '#f4a261',
    '#e9c46a',
    '#2a9d8f',
    '#3b429f',
    '#2b2d42',
    '#5d737e',
    '#095256',
    '#634b66',
];

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.data = require(`../data/${this.props.year}.json`);
        this.state = { dropdown: false, toggle: 'left' };
        this.chart = React.createRef();
    }

    toggleDropdown = () => {
        this.setState({ dropdown: !this.state.dropdown });
    };

    changeSwitch = (dir) => {
        this.setState({ toggle: dir });
    };

    openLink = (link) => {
        if (link === undefined) return;
        window.open(link, '_blank');
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
            <div
                className={`organizer-group ${t.link ? 'clickable' : ''}`}
                key={`${i}-${t.name}`}
                onClick={this.openLink.bind(this, t.link)}
            >
                {/* Essentially, the image is always at /first-last.jpg */}
                {/* This will BREAK if 2 people share the same name!!! */}
                <img
                    className="organizer-img"
                    src={`${imageDb}/people/${t.name.replace(' ', '-').toLowerCase()}.jpg`}
                    alt={t.name}
                ></img>
                <Duck className="organizer-img-placeholder"></Duck>
                <p className="organizer-name">{t.name}</p>
                <p className="organizer-position">{t.position}</p>
            </div>
        ));
    };

    createSponsorsList = (sponsors) => {
        let list = [];
        if (sponsors.t1)
            list.push(
                <div className="sponsor-section t1">
                    {sponsors.t1.map((s, i) => {
                        return this.createSponsorElement(s, i, 't1');
                    })}
                </div>
            );
        if (sponsors.t2)
            list.push(
                <div className="sponsor-section t1">
                    {sponsors.t2.map((s, i) => {
                        return this.createSponsorElement(s, i, 't2');
                    })}
                </div>
            );
        if (sponsors.t3)
            list.push(
                <div className="sponsor-section t3">
                    {sponsors.t3.map((s, i) => {
                        return this.createSponsorElement(s, i, 't3');
                    })}
                </div>
            );
        if (sponsors.t4)
            list.push(
                <div className="sponsor-section t4">
                    {sponsors.t4.map((s, i) => {
                        return this.createSponsorElement(s, i, 't4');
                    })}
                </div>
            );
        return list;
    };

    createSponsorElement = (sponsor, i, tier) => {
        return (
            <a className="sponsor-container" href={sponsor.website} alt={sponsor.name} key={`${i}-${sponsor.name}`}>
                <img
                    className={`sponsor-img ${tier}`}
                    src={`${imageDb}/sponsors/${sponsor.name}.${sponsor.svg ? 'svg' : 'png'}`}
                    alt={sponsor.name}
                ></img>
            </a>
        );
    };

    createExpensesTable = (sponsors) => {
        console.log(possibleColors);
        return (
            <table className="expenses-table">
                {sponsors.numbers.map((s, i) => (
                    <tr>
                        <td style={{ backgroundColor: String(possibleColors[i]) }}>{s.name}</td>
                        <div>{console.log([i])}</div>
                        <td className="expense-value">{`$${s.value.toFixed(2)}`}</td>
                    </tr>
                ))}
            </table>
        );
    };

    componentDidMount() {
        // Create the expenses chart
        if (this.data.sponsors === undefined) return;

        const numbers = this.data.sponsors.numbers;
        Chart.defaults.font.size = 16;
        const total = numbers.reduce((a, i) => a + i.value, 0);

        const config = {
            type: 'pie',
            data: {
                labels: numbers.map((n) => n.name),
                datasets: [
                    {
                        label: `Expenses ${this.props.year}`,
                        data: numbers.map((n) => (100 * n.value) / total),
                        backgroundColor: possibleColors.slice(0, numbers.length),
                    },
                ],
            },
        };
        new Chart(this.chart.current, config);
    }

    render() {
        const info = this.formatInfo(this.data);
        const organizersList = this.createOrganizersList(this.data.team);
        let sponsorList = null;
        let expensesTable = null;
        if (this.data.sponsors) {
            sponsorList = this.createSponsorsList(this.data.sponsors);
            expensesTable = this.createExpensesTable(this.data.sponsors);
        }

        const hasDevpost = this.data.devpost ? '' : 'hidden';
        const hasWebsite = this.data.site ? '' : 'hidden';

        return (
            <div className="event">
                <img
                    className="event-header"
                    alt={`${this.props.year} header`}
                    src={`${imageDb}/events/${this.props.year}.png`}
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
                        <a className={`event-dropdown-link devpost ${hasDevpost}`} href={this.data.devpost}>
                            Devpost
                        </a>
                        <a className={`event-dropdown-link website ${hasWebsite}`} href={this.data.site}>
                            Website
                        </a>
                    </div>
                    <div className={`event-dropdown-section organizers ${this.state.toggle}`}>
                        <div className="event-organizers-list">{organizersList}</div>
                    </div>
                    <div className={`event-dropdown-section sponsors ${this.state.toggle}`}>
                        <div className="event-sponsors">
                            {this.data.sponsors ? (
                                <>
                                    <div className="sponsor-half">
                                        <p className="pie-chart-title">Expenses Breakdown</p>
                                        <div className="pie-chart-container">
                                            <canvas ref={this.chart} className="pie-chart"></canvas>
                                        </div>
                                        {expensesTable}
                                    </div>
                                    <div className="sponsor-logos sponsor-half">{sponsorList}</div>
                                </>
                            ) : (
                                <p className="sponsor-empty">No sponsor information yet!</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Event;
