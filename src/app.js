import React from 'react';
import Menu from './pages/menu';
import About from './pages/about';
import Home from './pages/home';
import Footer from './pages/footer';
import Event from './pages/event';

import { ReactComponent as Waves } from './images/graphics/waves.svg';

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
                <Waves className="waves"></Waves>
                <About reference={this.about} />
                <div className="events" ref={this.events}>
                    <h1 className="title events-title" id="events">Events</h1>
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
