import React from 'react';
import Menu from './components/menu';
import Footer from './components/footer';
import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '' };

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
                <div className="home" ref={this.home}>
                    <div className="home-center-container">
                        <h1 className="home-title">hackTAMS.</h1>
                        <input
                            className="home-email-input"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        ></input>
                        <button className="home-submit" onClick={this.submit}>
                            Sign up for our newsletter!
                        </button>
                    </div>
                </div>
                <div className="about" ref={this.about}>
                    <h1 className="about-title">About Us</h1>
                    <p className="about-info-box">
                        We organize hackathons! A hackathon is a coding marathon where students come together to create
                        an innovative project within only 24 hours. Projects can cover topics such as COVID-19,
                        environment preservation, social good, and improving daily tasks in the form of a website,
                        mobile app, machine learning models, hardware, and more. Your creativity is your only
                        limitation! hackTAMS is part of the TAMS Computer Science Organization, and we host a beginner
                        orientated high school hackathon from Denton, TX.
                    </p>
                </div>
                <div className="events" ref={this.events}>
                    <h1 className="events-title">Events</h1>

                </div>
                    <Footer reference={this.contact}/>
            </div>
        );
    }
}

export default App;
