import React from 'react';
import { ReactComponent as SignBoard } from '../images/graphics/sign-board.svg';
import './home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '' };
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleEmailChange = (event) => this.setState({ email: event.target.value });

    submit = async () => {
        const response = await fetch('https://backend.hacktams.org/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: this.state.email }),
        });
        if (response.status === 200) {
            alert(`Thank you for subscribing to our newsletter! Email: ${this.state.email}`);
            this.setState({ email: '' });
        } else {
            const err = await response.json();
            alert(err.message);
        }
    };

    render() {
        return (
            <div className="home" ref={this.props.reference}>
                <div className="home-center-container">
                    <h1 className="home-title">hackTAMS</h1>
                    <input
                        className="home-email-input"
                        placeholder="Enter your email..."
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    ></input>
                    <div className="home-button-img-group">
                        <SignBoard className="home-email-line"></SignBoard>
                        <button className="home-submit" onClick={this.submit}>
                            Sign up for our newsletter!
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
