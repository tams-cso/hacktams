import React from 'react';
import Speaker from '../components/speaker';
import data from '../data/speakerData.json';
import './speakers.css';

class Speakers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    createSpeakers = () => {
        const speakerList = [];
        // speaker data will be something about image and then name and description
        data.forEach((speaker) => {
            speakerList.push(<Speaker key="" info={speaker} />);
        });
        return speakerList;
    };

    render() {
        return (
            <div className="speakers">
                <h2>Speakers</h2>
                <p>
                    Coming soon! Please email <a href="mailto: team@hacktams.org">team@hacktams.org</a> if you are
                    interested in speaking at our event!
                </p>
                <div className="speakers-container">
                    <div className="speakers-menu">{this.createSpeakers}</div>
                    <div className="speakers-display">
                        <div className="speakers-screen"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Speakers;
