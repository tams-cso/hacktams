import React from 'react';
import './about.css';

class About extends React.Component {
    render() {
        return (
            <div className="about" ref={this.props.reference}>
                <h1 className="about-title">We organize hckathons</h1>
                <p className="about-info-box">
                    Our goal is to introduce high school students to real-world computer science
                    skills, tools, and professionals in order to make a positive impact on the community.
                    hackTAMS is part of the <a href="https://cso.tams.club/" target="_blank">TAMS Computer Science Organization</a>,
                    and we host beginner-orientated high school hackathons in Denton, TX.
                </p>
            </div>
        );
    }
}

export default About;
