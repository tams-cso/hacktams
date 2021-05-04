import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import FAQ from './pages/faq';
import Sponsors from './pages/sponsors';
import Footer from './pages/footer';
import './app.css';

import { ReactComponent as Duck } from './images/logo-2021.svg';
import Speakers from './components/speakers';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.home = React.createRef();
        this.about = React.createRef();
        this.faq = React.createRef();
        this.sponsors = React.createRef();
        this.footer = React.createRef();
    }
    render() {
        return (
            <div className="app">
                <Duck className="logo"></Duck>
                <Home reference={this.home} />
                <About reference={this.about} />
                <Speakers />
                <FAQ reference={this.faq} />
                <Sponsors reference={this.sponsors} />
                <Footer reference={this.contact} />
            </div>
        );
    }
}

export default App;
