import React from 'react';
import Speaker from './speaker';
import './speakers.css';

class Speakers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    createSpeakers = () => {
        return <Speaker />;
    };

    render() {
        return (
            <div className="speakers">
                <h2>Speakers</h2>
                <p>Coming soon! Please email <a href="mailto: team@hacktams.org">team@hacktams.org</a> if you are interested in speaking at our event!</p>
                <div className="speakers-menu"></div>
                <div className="speakers-display">
                    <div className="speakers-screen"></div>
                </div>
            </div>
        );
    }
}

export default Speakers;
