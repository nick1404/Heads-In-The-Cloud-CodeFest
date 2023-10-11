import React, { Component } from 'react';
import './styles/Checkin.css';

function Checkin() {
  class CountdownTimer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        timeRemaining: 7200, // 2 hours in seconds
        isAlertActive: false,
      };
    }

    componentDidMount() {
      this.timer = setInterval(this.updateTime, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timer);
    }

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
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };

    render() {
      return (
        <div className="countdown-timer-container">
          <div className="countdown-timer">
            <div className="checkin-button-container">
              <button className="button checkin">Checkin</button>
            </div>
            <h2>Time until expected check out</h2>
            <div className="countdown-clock">
              {this.state.timeRemaining > 0 ? (
                <span>{this.formatTime(this.state.timeRemaining)}</span>
              ) : (
                <span>Time up!</span>
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

  return <CountdownTimer />;
}

export default Checkin;
