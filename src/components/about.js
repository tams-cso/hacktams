import React from 'react';
import './about.css';

class About extends React.Component {
    render() {
        return (
            <div className="about" ref={this.props.reference}>
                <h1 className="about-title">About Us</h1>
                <p className="about-info-box">
                    We organize hackathons! A hackathon is a coding marathon where students come together to create an
                    innovative project within only 24 hours. Projects can cover topics such as COVID-19, environment
                    preservation, social good, and improving daily tasks in the form of a website, mobile app, machine
                    learning models, hardware, and more. Your creativity is your only limitation! hackTAMS is part of
                    the TAMS Computer Science Organization, and we host a beginner orientated high school hackathon from
                    Denton, TX.
                </p>
            </div>
        );
    }
}

export default About;
