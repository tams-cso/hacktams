import React from 'react';
import './footer.css';

import FB from '../images/fb_icon.png';
import Insta from '../images/instagram_icon.png';
import Twitter from '../images/twitter_icon.svg';
import YouTube from '../images/yt_icon_rgb.png';

class Footer extends React.Component {
    openSite = (site) => {
        if (site !== '') window.open(site);
    };

    render() {
        return (
            <div className="footer" ref={this.props.reference}>
                <h1 className="footer-title">Contact Us!</h1>
                <p className="footer-info">
                    Made with &hearts; in Denton, Texas!<br></br>
                    Contact us at <a href="mailto: team@hacktams.org">team@hacktams.org</a>
                    <br></br>
                    Want to sponsor us? Email us at <a href="mailto:sponsorship@hacktams.org">sponsorship@hacktams.org</a>
                </p>
                <div className="footer-links">
                    <img
                        src={FB}
                        alt="Facebook"
                        className="footer-item"
                        onClick={this.openSite.bind(this, 'https://www.facebook.com/hackTAMS')}
                    />
                    <img
                        src={Insta}
                        alt="Instagram"
                        className="footer-item"
                        onClick={this.openSite.bind(this, 'https://www.instagram.com/hacktams/?hl=en')}
                    />
                    <img
                        src={Twitter}
                        alt="Twitter"
                        className="footer-item"
                        onClick={this.openSite.bind(this, 'https://twitter.com/thehackTAMS')}
                    />
                    <img
                        src={YouTube}
                        alt="YouTube"
                        className="footer-item"
                        onClick={this.openSite.bind(this, 'https://www.youtube.com/channel/UCVe1eL6FUcxay8gQ_BtHOjA')}
                    />
                </div>
            </div>
        );
    }
}

export default Footer;
