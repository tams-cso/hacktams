import React from 'react';
import Menu from './pages/menu';
import About from './pages/about';
import Home from './pages/home';
import Footer from './pages/footer';
import Event from './pages/event';

import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.home = React.createRef();
        this.about = React.createRef();
        this.events = React.createRef();
        this.contact = React.createRef();
    }

    navigate = (location) => this[location].current.scrollIntoView({ behavior: 'smooth' });

    render() {
        return (
            <div className="app">
                <Menu navigate={this.navigate} />
                <Home reference={this.home} />
                <About reference={this.about} />
                <div className="events" ref={this.events}>
                    <h1 id="Events" className="events-title">Events</h1>
                    <Event year="2021" />
                    <Event year="2020" />
                    <Event year="2019" />
                </div>
                <Footer reference={this.contact} />
            </div>
        );
    }
}

export default App;
