import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

function IssTracker() {
  const [issData, setIssData] = useState({
    latitude: 0,
    longitude: 0,
    velocity: 0,
    altitude: 0,
    timestamp: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.wheretheiss.at/v1/satellites/25544');
        const data = response.data;

        setIssData({
          latitude: data.latitude,
          longitude: data.longitude,
          velocity: data.velocity,
          altitude: data.altitude,
          timestamp: data.timestamp,
        });
      } catch (error) {
        console.error('Error fetching ISS data:', error);
      }
    };

    fetchData(); 

    const interval = setInterval(fetchData, 10000);  

    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="iss-tracker-page">
      <h2>ISS Tracker</h2>
      <div className="iss-info">
        <p>Velocity: {issData.velocity.toFixed(2)} km/h</p>
        <p>Altitude: {issData.altitude.toFixed(2)} km</p>
        
      </div>
      <div className="map-container" align="center">
       
        
        <iframe
          title="ISS Map"
          src={`https://www.google.com/maps?q=${issData.latitude},${issData.longitude}&z=4&output=embed`}
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
        ></iframe>

        
      </div>
    </div>
  );
}

export default IssTracker;
