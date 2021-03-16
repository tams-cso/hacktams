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
                <div className="event-header" onClick={this.changeDropdown}>
                    {/*{this.props.year}*/}
                    <b>2021</b>
                    {/* TODO have year, dates, # of teams, # of projects */}
                </div>
                <div className={`event-body ${this.state.drop ? 'drop' : 'no-drop'}`}>
                    <button className="devpost-button"><b>DEVPOST</b></button>
                    <button className="github-button"><b>GITHUB</b></button>
                    <br/>
                    <button className="site-button"><b>HackTAMS 2021 Site</b></button>
                    <br/>
                    <h2>Participants:</h2>
                    <div className="person-box">
                        <img src="" />
                        Person Name
                    </div>
                    <div className="person-box">
                        <img src="" />
                        Person Name
                    </div>
                    {this.personbox("Bob bobby", '../images/test_image.png')}
                    <div className="person-box">
                        <img src="" />
                        Person Name
                    </div>
                    <div className="person-box">
                        <img src="" />
                        Person Name
                    </div>
                    <div className="person-box">
                        <img src="" />
                        Person Name
                    </div>
                    {/* TODO have devpost link, site link, list of People */}
                </div>
                <div className="event-header" onClick={this.changeDropdown}>
                    {/*{this.props.year}*/}
                    <b>2020</b>
                    {/* TODO have year, dates, # of teams, # of projects */}
                </div>
                <div className={`event-body ${this.state.drop ? 'drop' : 'no-drop'}`}>
                    <button className="devpost-button"><b>DEVPOST</b></button>
                    <button className="github-button"><b>GITHUB</b></button>
                    <br/>
                    <button className="site-button"><b>HackTAMS 2020 Site</b></button>
                    <br/>
                    <h2>Participants:</h2>
                    <div className="person-box">
                        <img src="" />
                        Person Name
                    </div>
                    <div className="person-box">
                        <img src="" />
                        Person Name
                    </div>
                    <div className="person-box">
                        <img src="../images/test_image.png" />
                        Person Name
                    </div>
                    <div className="person-box">
                        <img src="" />
                        Person Name
                    </div>
                    <div className="person-box">
                        <img src="" />
                        Person Name
                    </div>
                    <div className="person-box">
                        <img src="" />
                        Person Name
                    </div>
                    {/* TODO have devpost link, site link, list of People */}
                </div>
            </div>
        );
    }
}

export default Event;
