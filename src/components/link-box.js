import React from 'react';
import './link-box.css';

class LinkBox extends React.Component {
    render() {
        return (
            <div
                className={`link-box${this.props.link !== '' ? ' active' : ' inactive'}`}
                onClick={() => {
                    window.open(this.props.link);
                }}
            >
                {this.props.children}
            </div>
        );
    }
}

export default LinkBox;
