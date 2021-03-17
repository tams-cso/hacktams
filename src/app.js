import React from 'react';
import Menu from './components/menu';
import About from './components/about';
import Home from './components/home';
import Footer from './components/footer';
import Event from './components/event';

import './app.css';

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
                </div>
                <Event reference={this.events} />
                <Footer reference={this.contact}/>
            </div>
        );
    }
}

export default App;
