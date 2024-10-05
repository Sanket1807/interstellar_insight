import React, { useState } from 'react';
import './App.css';

function Starmap() {
  const [location, setLocation] = useState({ latitude: 33.775867, longitude: -84.39733 });
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [style, setStyle] = useState('default');
  const [viewType, setViewType] = useState('constellation');
  const [constellation, setConstellation] = useState('and');
  const [rightAscension, setRightAscension] = useState(10); 
  const [declination, setDeclination] = useState(-30);
  const [zoom, setZoom] = useState(3);
  const [starMapImageUrl, setStarMapImageUrl] = useState('');
  const [error, setError] = useState('');

  const styles = [
    { value: 'default', label: 'Default' },
    { value: 'inverted', label: 'Inverted' },
    { value: 'navy', label: 'Navy' },
    { value: 'red', label: 'Red' }
  ];

  const viewTypes = [
    { value: 'area', label: 'Area' },
    { value: 'constellation', label: 'Constellation' }
  ];

  const constellations = [
    { value: 'and', label: 'Andromeda' },
    { value: 'ant', label: 'Antlia' },
    { value: 'aps', label: 'Apus' },
    { value: 'ori', label: 'Orion' },
    { value: 'leo', label: 'Leo' },
    { value: 'gem', label: 'Gemini' }
  ];

  const handleLocationChange = (key, value) => {
    setLocation({ ...location, [key]: value });
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleStyleChange = (e) => {
    setStyle(e.target.value);
  };

  const handleViewTypeChange = (e) => {
    setViewType(e.target.value);
    setError('');
  };

  const handleConstellationChange = (e) => {
    setConstellation(e.target.value);
  };

  const handleRightAscensionChange = (e) => {
    setRightAscension(e.target.value);
  };

  const handleDeclinationChange = (e) => {
    setDeclination(e.target.value);
  };

  const handleZoomChange = (e) => {
    setZoom(e.target.value);
  };

  const generateStarMap = () => {
    if (!location.latitude || !location.longitude || !date) {
      setError('Please provide valid inputs for location and date.');
      return;
    }

    const apiKey = btoa('6f5c75da-ef0a-428e-89a9-1187dd0c22e3:ae8c066e77e72cf0d3f6e5ee2c95d7b2e2df548b0f97bfc3f0ba57384fcb788e7e6752bc292d0d36537e1d5f7ce5b68e01b1e960fb658977d8d9dfdd543b3768f3a60872a384d692d05c5bd10f236d11160347be6c9d27ff2da4b5c17ab8885a69de8669581aa6fa033a974f5631b64f');

    let requestData;

    if (viewType === 'constellation') {
      requestData = {
        style: style,
        observer: {
          latitude: parseFloat(location.latitude),
          longitude: parseFloat(location.longitude),
          date: date,
        },
        view: {
          type: 'constellation',
          parameters: {
            constellation: constellation,
          },
        },
      };
    } else if (viewType === 'area') {
      if (rightAscension < 0 || rightAscension > 24 || declination < -90 || declination > 90 || zoom < 1 || zoom > 9) {
        setError('Invalid values for Right Ascension, Declination, or Zoom.');
        return;
      }

      requestData = {
        style: style,
        observer: {
          latitude: parseFloat(location.latitude),
          longitude: parseFloat(location.longitude),
          date: date,
        },
        view: {
          type: 'area',
          parameters: {
            zoom: parseFloat(zoom),
            position: {
              equatorial: {
                rightAscension: parseFloat(rightAscension),
                declination: parseFloat(declination),
              },
            },
          },
        },
      };
    }

    fetch('/api/v2/studio/star-chart', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })

      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        if (data.data && data.data.imageUrl) {
          const timestampedUrl = `${data.data.imageUrl}?t=${new Date().getTime()}`;
          setStarMapImageUrl(timestampedUrl);
          setError('');
        } else {
          setError('Image URL not found in the response.');
          console.error('Image URL not found in the response:', data);
        }
      })
      .catch(error => {
        setError('Error fetching the star map. Please try again.');
        console.error('Error fetching the star map:', error);
      });
  };

  return (
    <div>
      
      <div className="starmap-page">
        <h2>Starmap</h2>
        <div className="input-container">
          <label htmlFor="latitude">Latitude:</label>
          <input
            type="number"
            id="latitude"
            value={location.latitude}
            onChange={(e) => handleLocationChange('latitude', e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="longitude">Longitude:</label>
          <input
            type="number"
            id="longitude"
            value={location.longitude}
            onChange={(e) => handleLocationChange('longitude', e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="style">Style:</label>
          <select
            id="style"
            value={style}
            onChange={handleStyleChange}
          >
            {styles.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="viewType">Type:</label>
          <select
            id="viewType"
            value={viewType}
            onChange={handleViewTypeChange}
          >
            {viewTypes.map((vt) => (
              <option key={vt.value} value={vt.value}>
                {vt.label}
              </option>
            ))}
          </select>
        </div>

        {viewType === 'constellation' && (
          <div className="input-container">
            <label htmlFor="constellation">Constellation:</label>
            <select
              id="constellation"
              value={constellation}
              onChange={handleConstellationChange}
            >
              {constellations.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {viewType === 'area' && (
          <div>
            <div className="input-container">
              <label htmlFor="rightAscension">Right Ascension:</label>
              <input
                type="number"
                id="rightAscension"
                value={rightAscension}
                onChange={handleRightAscensionChange}
                min="0"
                max="24"
              />
            </div>
            <div className="input-container">
              <label htmlFor="declination">Declination:</label>
              <input
                type="number"
                id="declination"
                value={declination}
                onChange={handleDeclinationChange}
                min="-90"
                max="90"
              />
            </div>
            <div className="input-container">
              <label htmlFor="zoom">Zoom Level:</label>
              <input
                type="number"
                id="zoom"
                value={zoom}
                onChange={handleZoomChange}
                min="1"
                max="9"
              />
            </div>
          </div>
        )}

        {error && <div className="error-message">{error}</div>}

        <div className="generate-button">
          <button onClick={generateStarMap}>Generate Star Map</button>
        </div>

        {starMapImageUrl && (
          <div className="starmap-image">
            <h3>Generated Star Map:</h3>
            <img src={starMapImageUrl} alt="Star Map" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Starmap;
