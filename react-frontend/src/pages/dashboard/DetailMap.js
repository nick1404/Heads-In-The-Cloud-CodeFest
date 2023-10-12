import React from "react";
import GoogleMapReact from 'google-map-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate} from  'react-router-dom';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const navigate = useNavigate();

  const percentage = 66;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 50
  };

  const nameAndProgressContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  // const nameStyle = {
  //   display:'inline-block',
  //   marginRight: '10px',
  //   fontSize: '24px', // Adjust the font size as needed
  // };

  const progressBarContainerStyle = {
    width: '50px', // Adjust the width as needed
  };


  const circularContainerStyle = {
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    overflow: 'hidden',
  };

  const buttonContainerStyle = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={nameAndProgressContainerStyle}>
      <div style={{ flex: 1, fontSize: '2em', color: 'black', textShadow: '0 0 1px #000' }}>
    Anna
  </div>
  <div style={progressBarContainerStyle}>
          <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: `rgba(62, 152, 123, ${percentage / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })} />
        </div>
      <div>
  <span style={{ display: 'block', marginBottom: '10px',color: 'grey' }}>11/10/2023 12:00 - 15:00</span>
  <span style={{ display: 'block' }}>123 A Road, EX1 EXP</span>
</div>


      </div>
      <div style={circularContainerStyle}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>

      <div style={buttonContainerStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
  <div style={{ display: 'flex', gap: '10px' }}>
    <button style={{ backgroundColor: '#1C5BA7', color: 'white', width: '120px' }}
    onClick = {()  => navigate("/chat")}
    >Chat</button>
    <button style={{ backgroundColor: '#5ABCD1', color: 'black', width: '120px' }}>Notify</button>
    <button style={{ backgroundColor: '#1BB4EE', color: 'black', width: '120px' }}>Call</button>
  </div>
  <button style={{ backgroundColor: '#E2F4F7', color: 'black', width: '180px' }}>Emergency</button>
</div>


      </div>
    </div>
  );
}