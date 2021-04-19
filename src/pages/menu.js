import React from 'react';
import './menu.css';

import { ReactComponent as Duck } from '../images/logos/duck-logo.svg';

class Menu extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-item navbar-logo-container" onClick={this.props.navigate.bind(this, 'home')}>
                    <Duck className="navbar-logo"></Duck>
                </div>
                <button className="navbar-item" onClick={this.props.navigate.bind(this, 'home')}>
                    Home
                </button>
                <button className="navbar-item" onClick={this.props.navigate.bind(this, 'about')}>
                    About Us
                </button>
                <button className="navbar-item" onClick={this.props.navigate.bind(this, 'events')}>
                    Our Events
                </button>
                <button className="navbar-item" onClick={this.props.navigate.bind(this, 'contact')}>
                    Contact Us
                </button>
            </div>
        );
    }
}

export default Menu;
