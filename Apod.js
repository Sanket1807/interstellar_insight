import React, { useState, useEffect } from 'react';
import './App.css';

function Apod() {
  const [selectedDate, setSelectedDate] = useState(''); 
  const [apodData, setApodData] = useState(null); 
  const [error, setError] = useState(null); 

  const fetchApodData = async (date = '') => {
    const apiKey = 'ghaaV4lFF8NDjtrqqOBd7n8TkD30Day6RHE2qqrE'; 
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}${date ? `&date=${date}` : ''}`;

    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setApodData(data);
        setError(null); 
      } else {
        setError('Error fetching APOD data');
      }
    } catch (error) {
      setError('Error fetching APOD data: ' + error.message);
    }
  };

  useEffect(() => {
    fetchApodData();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      fetchApodData(selectedDate);
    }
  }, [selectedDate]);

  return (
    <div className="apod-page">
      <div className="background-image"></div> 
        <h2>Astronomy Picture of the Day</h2>
        <div className="date-input">
          <label htmlFor="apodDate">Select a Date:</label>
          <input
            type="date"
            id="apodDate"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            max={new Date().toISOString().split("T")[0]}
          />
        </div>
        {error && <p className="error">{error}</p>} 
        {apodData && (
          <div className="apod-content">
            <h3>{apodData.title}</h3>
            {apodData.media_type === 'image' ? (
              <img src={apodData.url} alt={apodData.title} className="apod-image" />
            ) : (
              <iframe
                title="APOD Video"
                src={apodData.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="apod-video"
              ></iframe>
            )}
            <p>{apodData.explanation}</p>
          </div>
        )}
      </div>
  );
}

export default Apod;
