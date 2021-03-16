import React from 'react';
import Menu from './components/menu';
import Event from './components/event';
import About from './components/about';

import './app.css';
import Home from './components/home';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.home = React.createRef();
        this.about = React.createRef();
        this.events = React.createRef();
        this.contact = React.createRef();
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    navigate = (location) => this[location].current.scrollIntoView();

    handleEmailChange = (event) => this.setState({ email: event.target.value });

    submit = () => {
        alert(`Entered email: ${this.state.email}`);
        // TODO: Make this button ACTUALLY submit the email lol
    };

    render() {
        return (
            <div className="app">
                <Menu navigate={this.navigate} />
                <Home reference={this.home} />
                <About reference={this.about} />

                <div className="events" ref={this.events}>
                    <h1 className="events-title">Events</h1>
                    <Event year="2020" />
                </div>

                <div className="footer" ref={this.contact}>
                    <h1 className="contact-us">Contact Us!</h1>
                    <p className="contact-us-info-box">
                        Made with &hearts; in Denton, Texas!<br></br>
                        Contact us at <a href="mailto: team@hacktams.org">team@hacktams.org</a>
                        <br></br>
                        Want to sponsor us? Email us at <a href="mailto: sponsor@hacktams.org">sponsor@hacktams.org</a>
                    </p>
                    <div className="footer-item">
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="footer item"
                        >
                            <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" />
                        </a>
                        <a
                            href="https://www.instagram.com/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="footer item"
                        >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" class="footer item">
                            <img src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" />
                        </a>
                        <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" class="footer item">
                            <img src="https://cdn.iconscout.com/icon/free/png-512/discord-3-569463.png" />
                        </a>
                    </div>
                    <a href="https://www.youtube.com/">Check out our youtube channel!</a>
                </div>
            </div>
        );
    }
}

export default App;
