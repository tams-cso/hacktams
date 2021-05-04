import React from 'react';
import './home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="home-container">
                    <h1 className="home-title">hackTAMS</h1>
                    <button className="home-register" onClick={this.submit}>
                        Register Now
                    </button>
                    <p>Registration opens in August!</p>
                </div>
            </div>
        );
    }
}

export default Home;
