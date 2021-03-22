import React from 'react';
import './person.css';

class Person extends React.Component {
    render() {
        return (
            <div className="person">
                <div className="person-img"></div>
                <div className="person-name">{this.props.info.name}</div>
                <div className="person-position">{this.props.info.position}</div>
            </div>
        );
    }
}

export default Person;
