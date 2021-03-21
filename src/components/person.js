import React from 'react';
import './person.css';

class Person extends React.Component {
    render() {
        return (
            <div className="person">
                <div className="person-img"></div>
                <div className="person-name"></div>
                <div className="person-position"></div>
            </div>
        );
    }
}

export default Person;
