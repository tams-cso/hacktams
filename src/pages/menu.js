import React from 'react';
import { ReactComponent as Duck } from '../images/logos/duck-logo.svg';
import './menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spin: false };
    }

    toggleSpin = () => {
        this.setState({ spin: !this.state.spin });
    };
    
    render() {
        const spinDuck = this.state.spin ? 'spin' : '';
        return (
            <div className="menu">
                <Duck className={`menu-item menu-logo ${spinDuck}`} onClick={this.toggleSpin}></Duck>
                <a className="menu-item" href={`${window.location.origin}#about`}>
                    About Us
                </a>
                <a className="menu-item" href={`${window.location.origin}#events`}>
                    Our Events
                </a>
                <a className="menu-item" href={`${window.location.origin}#contact-us`}>
                    Contact Us
                </a>
            </div>
        );
    }
}

export default Menu;
