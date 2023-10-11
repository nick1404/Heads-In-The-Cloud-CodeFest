import React, { Component } from 'react';
import './styles/Checkin.css';

class Checkin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: 7200, // 2 hours in seconds
      isAlertActive: false,
      isCheckin: true, // Track whether it's check-in or check-out mode
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTimer = () => {
    this.timer = setInterval(this.updateTime, 1000);
  };

  updateTime = () => {
    if (this.state.timeRemaining > 0) {
      this.setState((prevState) => ({
        timeRemaining: prevState.timeRemaining - 1,
      }));
    } else {
      this.setState({ isAlertActive: true });
      clearInterval(this.timer);
    }
  };

  formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  handleToggleMode = () => {
    this.setState((prevState) => ({
      isCheckin: !prevState.isCheckin,
      isAlertActive: false, // Reset the alert
    }));

    // Reset the timer based on the new mode
    this.setState({
      timeRemaining: this.state.isCheckin ? 7200 : 0,
    });

    if (this.state.isCheckin) {
      // Start the timer if it's in check-in mode
      this.startTimer();
    } else {
      // Stop the timer if it's in check-out mode
      clearInterval(this.timer);
    }
  };

  render() {
    return (
      <div className="countdown-timer-container">
        <div className="countdown-timer">
          <div className="checkin-button-container">
            <button
              className={`button ${this.state.isCheckin ? 'checkin' : 'checkout'}`}
              onClick={this.handleToggleMode}
            >
              {this.state.isCheckin ? 'Checkin' : 'Checkout'}
            </button>
          </div>
          <h2>Time until expected check {this.state.isCheckin ? 'out' : 'in'}</h2>
          <div className="countdown-clock">
            {!this.state.isCheckin ? (
              <span>{this.formatTime(this.state.timeRemaining)}</span>
            ) : (
              <span>Please check in</span>
            )}
          </div>
          <div className="buttons">
            <button className="button chat">Chat</button>
            <button className={`button alert ${this.state.isAlertActive ? 'active' : ''}`}>
              ALERT
            </button>
            <button className="button call">Call</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkin;
