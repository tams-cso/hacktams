import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <h1 className="contact-us">Contact Us!</h1>
                <p className="contact-us-info-box">
                    Made with &hearts; in Denton, Texas!<br></br>
                    Contact us at <a href="mailto: team@hacktams.org">team@hacktams.org</a><br></br>
                    Want to sponsor us? Email us at <a href="mailto: sponsor@hacktams.org">sponsor@hacktams.org</a>
                </p>
            </div>
        );
    }
}

export default Footer;
