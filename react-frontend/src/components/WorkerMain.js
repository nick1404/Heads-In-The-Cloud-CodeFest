import React from 'react';
import './styles/WorkerMain.css';

const PersonBox = ({ address, name, time }) => (
  <button className="overlap-2" onClick={() => window.location.href = "/checkin"}>
    <p className="text-wrapper">{address}</p>
    <div className="text-wrapper-2">{name}</div>
    <div className="text-wrapper-3">{time}</div>
    <div className="ellipse" />
  </button>
);

export const WorkerMain = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="overlap">
          <div className="overlap-group">
            <div className="div">
              <div className="notifications-wrapper">
                <img className="img" alt="Notifications" src="/img/notifications.png" />
              </div>
              <div className="format-indent-wrapper">
                <img className="img" alt="Format indent" src="/img/format-indent-increase.png" />
              </div>
              <div className="account-circle-wrapper">
                <img className="img" alt="Account circle" src="/img/account-circle.png" />
              </div>
            </div>
          </div>
          <div className="worker-box">
            <PersonBox
              address="123 A Road, WA14 MADEUP"
              name="Toby"
              time="11/10/2023 12:00 - 14:00"
            />
          </div>
          <div className="overlap-wrapper">
            <PersonBox
              address="456 B Road, WA15 FAKECODE"
              name="Claire"
              time="11/10/2023 13:30 - 15:00"
            />
          </div>
          <div className="overlap-group-wrapper">
            <PersonBox
              address="789 C Road, M1 NOTREAL"
              name="Bob"
              time="11/10/2023 16:00 - 18:00"
            />
          </div>
          <div className="text-wrapper-8">Your Appointment</div>
        </div>
      </div>
    </div>
  );
};
