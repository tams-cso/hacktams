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

    submit = () => {
        alert(`Entered email: ${this.state.email}`);
        this.setState({ email: '' });
        // TODO: Make this button ACTUALLY submit the email lol
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
