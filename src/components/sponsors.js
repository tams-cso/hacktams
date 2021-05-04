import React from 'react';
import Frame from '../images/template.svg';
/*import Default from '../images/raw.png';*/
import './sponsors.css';

class Sponsors extends React.Component {
    render() {
        return (
            <div className="sponsors" >
                <h2>Our Sponsors</h2>
                <div className="break"></div>
                <img src={Frame} alt="Frame" className="sponsors large" />
                <div className="break"></div>
                <img src={Frame} alt="Frame" className="sponsors medium" />
                <img src={Frame} alt="Frame" className="sponsors medium" />
                <div className="break"></div>
                <img src={Frame} alt="Frame" className="sponsors small" />
                <img src={Frame} alt="Frame" className="sponsors small" />
                <img src={Frame} alt="Frame" className="sponsors small" />
            </div >
        );
    }
}

export default Sponsors;