import React from 'react';
import './about.css';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdown: false, toggle: 'left' };
    }

    toggleDropdown = () => {
        this.setState({ dropdown: !this.state.dropdown });
    };

    changeSwitch = (dir) => {
        this.setState({ toggle: dir });
    };

    render() {
        return (
            <div className="about">
                <h2>About</h2>
                <p>
                    hackTAMS is an annual hackathon organized by students at the Texas Academy of Mathematics and
                    Science. Our event brings high school students from across the DFW area to showcase their talent and
                    creativity. A hackathon is a coding marathon where students design, build, and present a project —
                    typically software, and sometimes hardware — within a short period of time. Students have access to
                    mentors, speakers, workshops, and networking opportunities while working on their project.
                </p>
                <p>
                    A hackathon is a coding marathon where students design, build, and present a project — typically
                    software, and sometimes hardware — within a short period of time. Students have access to mentors,
                    speakers, workshops, and networking opportunities while working on their project.
                </p>
                <div className="tracks-container">
                    <button
                        className={`track-switch left ${this.state.toggle}-active`}
                        onClick={this.changeSwitch.bind(this, 'left')}
                    >
                        <h3>Hack</h3>
                    </button>
                    <div className="line"></div>
                    <button
                        className={`track-switch right ${this.state.toggle}-active`}
                        onClick={this.changeSwitch.bind(this, 'right')}
                    >
                        <h3>Learn</h3>
                    </button>
                </div>
                <div className={`track hack ${this.state.toggle}`}>
                    <p>
                        The Hack track is geared towards students who have experience in computer science and
                        engineering. Students will design and prototype a project using their technical skills and the
                        latest technologies. For example projects, consider looking at{' '}
                        <a href="https://devpost.com/software" target="_blank" rel="noreferrer">
                            previous projects on Devpost
                        </a>
                        .
                    </p>
                </div>
                <div className={`track learn ${this.state.toggle}`}>
                    <p>
                        The Learn track is for students who have not as much experience in coding. Take this as an
                        opportunity to add new skills to your toolbox and put them to your first use! Here are some of
                        the “starting kits” we will provide to give you a head-start on your project: Web Dev, Machine
                        Learning, Video Games.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
