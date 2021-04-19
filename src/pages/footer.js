import React from 'react';
import { ReactComponent as FB } from '../images/logos/fb-icon.svg';
import { ReactComponent as Instagram } from '../images/logos/instagram-icon.svg';
import { ReactComponent as Twitter } from '../images/logos/twitter-icon.svg';
import { ReactComponent as Youtube } from '../images/logos/yt-icon.svg';
import { ReactComponent as LinkedIn } from '../images/logos/linkedin-icon.svg';
import './footer.css';

class Footer extends React.Component {
    openSite = (site) => {
        if (site !== '') window.open(site);
    };

    render() {
        return (
            <div className="footer" ref={this.props.reference}>
                <h1 className="footer-title" id="contact-us">
                    Contact Us!
                </h1>
                <p className="footer-info">
                    Made with 💖 in Denton, Texas!<br></br>
                    Contact us at <a href="mailto: team@hacktams.org">team@hacktams.org</a>
                    <br></br>
                    Want to sponsor us? Email us at&nbsp;
                    <a href="mailto:sponsorship@hacktams.org">sponsorship@hacktams.org</a>
                </p>
                <div className="footer-links">
                    <FB
                        alt="Facebook"
                        className="footer-item"
                        onClick={this.openSite.bind(this, 'https://www.facebook.com/hackTAMS')}
                    />
                    <Instagram
                        alt="Instagram"
                        className="footer-item"
                        onClick={this.openSite.bind(this, 'https://www.instagram.com/hacktams/?hl=en')}
                    />
                    <Twitter
                        alt="Twitter"
                        className="footer-item"
                        onClick={this.openSite.bind(this, 'https://twitter.com/thehackTAMS')}
                    />
                    <Youtube
                        alt="YouTube"
                        className="footer-item"
                        onClick={this.openSite.bind(this, 'https://www.youtube.com/channel/UCVe1eL6FUcxay8gQ_BtHOjA')}
                    />
                    <LinkedIn
                        alt="LinkedIn"
                        className="footer-item"
                        onClick={this.openSite.bind(this, 'https://www.linkedin.com/company/hacktams/')}
                    />
                </div>
            </div>
        );
    }
}

export default Footer;
