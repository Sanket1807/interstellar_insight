import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';

function NaturalEvents() {
  const [naturalEvents, setNaturalEvents] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNaturalEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/events?type=Natural');
        setNaturalEvents(response.data);
      } catch (error) {
        console.error('Error fetching natural events:', error);
      }
    };

    const checkAdminStatus = async () => {
      try {
        const response = await axios.get('http://localhost:8080/check-admin', { withCredentials: true });
        setIsAdmin(response.data.isAdmin || false);
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
    };

    fetchNaturalEvents();
    checkAdminStatus();
  }, []);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const monthMap = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  const currentDate = new Date();

  const isValidDate = (date) => !isNaN(new Date(date).getTime());

  const filteredEvents = naturalEvents.filter((event) => {
    const eventDate = new Date(event.date);
    const eventMonth = eventDate.getMonth() + 1;
    const isFutureEvent = eventDate > currentDate;
    const isValid = isValidDate(event.date);
    return isValid && isFutureEvent && (!selectedMonth || eventMonth === monthMap[selectedMonth]);
  });

  const handleAddEvent = () => {
    navigate('/add-event');
  };

  return (
    <div className="event-body">
      <div className="events1-page">
        <h1 align="center">Natural Events</h1>

        <div className="filter-options">
          <label htmlFor="month-selector">Filter by Month:</label>
          <select id="month-selector" onChange={handleMonthChange}>
            <option value="">All Months</option>
            {Object.keys(monthMap).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className="event-cards">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event._id} className="event-card">
                <h3>{event.title}</h3>
                <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                <p>Time: {event.time}</p>
                <p>Location: {event.location}</p>
                <p>{event.description}</p>
              </div>
            ))
          ) : (
            <p>No upcoming events found for the selected month.</p>
          )}
        </div>
        <div className="add-event-button">
          {isAdmin && (
            <button onClick={handleAddEvent} className="add-event-button">
              Add Event
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NaturalEvents;
