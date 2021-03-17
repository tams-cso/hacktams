import React from 'react';
import './event.css';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dropOne: false, dropTwo: false};
    }

    changeDropdown1 = () => {
        this.setState({dropOne: !this.state.dropOne});
    }
    changeDropdown2 = () => {
        this.setState({dropTwo: !this.state.dropTwo});
    }

    personbox(name, imageUrl){
        return(
            <div className="person-box">
                <img src= {imageUrl} alt="hackTAMS participant" />
                {name}
            </div>
        )
    }

    render() {
        return (
            <div className="event">
                <div className="event-header" onClick={this.changeDropdown1}>
                    {/*{this.props.year}*/}
                    <b>2021 Coming Soon on October 23</b>
                    {/* TODO have year, dates, # of teams, # of projects */}
                </div>
                <div className={`event-body ${this.state.dropOne ? 'drop' : 'no-drop'}`}>
                    <button className="devpost-button"><b>DEVPOST</b></button>
                    <button className="github-button"><b>GITHUB</b></button>
                    <br/>
                    <button className="site-button"><b>HackTAMS 2021 Site</b></button>
                    <br/>
                    <h2>Participants:</h2>
                    <div className="person-box">
                        <img src="" alt="Person face" />
                        Person Name
                    </div>
                    <div className="person-box">
                        <img src="" alt="Person face" />
                        Person Name
                    </div>
                    {this.personbox("Bob bobby", '../images/test_image.png')}
                    <div className="person-box">
                        <img src="" alt="Person face" />
                        Person Name
                    </div>
                    <div className="person-box">
                        <img src="" alt="Person face" />
                        Person Name
                    </div>
                    <div className="person-box">
                        <img src="" alt="Person face" />
                        Person Name
                    </div>
                    {/* TODO have devpost link, site link, list of People */}
                </div>
                <div className="event-header" onClick={this.changeDropdown2}>
                    {/*{this.props.year}*/}
                    <b>2020 (Nov 6-8),  94 hackers, 44 projects</b>
                    {/* TODO have year, dates, # of teams, # of projects */}
                </div>
                <div className={`event-body ${this.state.dropTwo ? 'drop' : 'no-drop'}`}>
                    <a href="https://hacktams2020f.devpost.com/"><button className="devpost-button"><b>DEVPOST</b></button></a>
                    <button className="github-button"><b>GITHUB</b></button>
                    <br/>
                    <button className="site-button"><b>HackTAMS 2020 Site</b></button>
                    <br/>
                    <h2>Participants:</h2>
                    <div className="person-box">
                        <img src="" alt="Person face" />
                        Person Name
                    </div>
                    <div className="person-box">
                        <img src="" alt="Person face" />
                        Person Name
                    </div>
                    <div className="person-box">
                        <img src="../images/test_image.png" alt="Person face" />
                        Person Name
                    </div>
                    <div className="person-box">
                        <img src="" alt="Person face" />
                        Person Name
                    </div>
                    <div className="person-box">
                        <img src="" alt="Person face" />
                        Person Name
                    </div>
                    <div className="person-box">
                        <img src="" alt="Person face" />
                        Person Name
                    </div>
                    {/* TODO have devpost link, site link, list of People */}
                </div>
            </div>
        );
    }
}

export default Event;
