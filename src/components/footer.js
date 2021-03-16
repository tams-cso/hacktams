import React from 'react';
import './footer.css';

import FB from '../images/fb_icon.png';
import Insta from '../images/instagram_icon.png';
import Twitter from '../images/twitter_icon.svg';
import YouTube from '../images/yt_icon_rgb.png';

class Footer extends React.Component {
    render() {
        return [
            <div className="footer" ref={this.props.reference}>
                <h1 className="contact-us">Contact Us!</h1>
                <p className="contact-us-info-box">
                    Made with &hearts; in Denton, Texas!<br></br>
                    Contact us at <a href="mailto: team@hacktams.org">team@hacktams.org</a><br></br>
                    Want to sponsor us? Email us at <a href="mailto: sponsor@hacktams.org">sponsor@hacktams.org</a>
                </p>
            </div>,
            <div className="footer-item">
                <a href="https://www.facebook.com/hackTAMS" target="_blank" rel="noopener noreferrer" class="footer item">
                    <img src={FB} alt="Facebook" /></a>
                <a href="https://www.instagram.com/hacktams/?hl=en" target="_blank" rel="noopener noreferrer" class="footer item">
                    <img src={Insta} alt="Instagram" /></a>
                <a href="https://twitter.com/thehackTAMS" target="_blank" rel="noopener noreferrer" class="footer item">
                    <img src={Twitter} alt="Twitter" /></a>
                <a href="https://www.youtube.com/channel/UCVe1eL6FUcxay8gQ_BtHOjA" target="_blank" rel="noopener noreferrer" class="footer item">
                    <img src={YouTube} alt="YouTube" /></a>
            </div>
        ]
    }
}

export default Footer;
