import React, { useState } from 'react';
import axios from 'axios';
import './App.css';  

const AddEvent = ({ inAdminPanel }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [eventType, setEventType] = useState('');

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0'); 
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/add-event', {
        title,
        date,
        time,
        location,
        description,
        eventType,
      });

      if (response.status === 200) {
        alert('Event added successfully!');
        setTitle('');
        setDate('');
        setTime('');
        setLocation('');
        setDescription('');
        setEventType('');
      }
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Failed to add event.');
    }
  };

  return (
    <div
      className="add-event-outer-container"
      style={{
        backgroundImage: inAdminPanel ? 'none' : "url('/image16.jpg')", 
      }}
    >
      <div className="add-event-container">
        <h1 className="add-event-title">Add New Event</h1>
        <form className="add-event-form" onSubmit={handleSubmit}>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={getTodayDate()}
            required
          />

          <label>Time</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

          <label>Location</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />

          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

          <label>Event Type</label>
          <select value={eventType} onChange={(e) => setEventType(e.target.value)} required>
            <option value="">Select type</option>
            <option value="Natural">Natural Event</option>
            <option value="Community">Community Event</option>
          </select>

          <button type="submit">Add Event</button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
