import React from 'react';
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
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    ></input>
                    <button className="home-submit" onClick={this.submit}>
                        Sign up for our newsletter!
                    </button>
                </div>
            </div>
        );
    }
}

export default Home;
