import React from 'react';

import { ReactComponent as Duck } from './logo.svg';
import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '' };

        this.home = React.createRef();
        this.about = React.createRef();
        this.events = React.createRef();
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    navigate = (location) => this[location].current.scrollIntoView();

    handleEmailChange = (event) => this.setState({ email: event.target.value });

    submit = () => {
        alert(`Entered email: ${this.state.email}`);
        // TODO: Make this button ACTUALLY submit the email lol
    }

    render() {
        return (
            <div className="app">
                <div className="navbar">
                    <div className="navbar-item navbar-logo-container" onClick={this.navigate.bind(this, 'home')}>
                        <Duck className="navbar-logo"></Duck>
                    </div>
                    <button className="navbar-item" onClick={this.navigate.bind(this, 'home')}>
                        Home
                    </button>
                    <button className="navbar-item" onClick={this.navigate.bind(this, 'about')}>
                        About Us
                    </button>
                    <button className="navbar-item" onClick={this.navigate.bind(this, 'events')}>
                        Our Events
                    </button>
                </div>
                <div className="home" ref={this.home}>
                    <div className="home-center-container">
                        <h1 className="home-title">hackTAMS.</h1>
                        <input
                            className="home-email-input"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        ></input>
                        <button className="home-submit" onClick={this.submit}>Sign up for our newsletter!</button>
                    </div>
                </div>
                <div className="about" ref={this.about}>
                    This is the about page!
                </div>
                <div className="events" ref={this.events}>
                    Here are our events!
                </div>
                <div className="footer">Footer footer footer footer</div>
            </div>
        );
    }
}

export default App;
