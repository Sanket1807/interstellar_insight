import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setSuccessMessage('Message sent successfully!');
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setErrorMessage('Failed to send the message. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="contact-page-bg">
      <div className="contact-page">
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, please feel free to reach out to us.</p>

        <div className="contact-info">
          <p>Email: interstellarinsight@gmail.com</p>
          <p>Phone: +91 281 2449940</p>
          <p>Address: Shri O. V. Sheth Regional Community Science Center, Nehru Udhyan, Race Course, Rajkot, Gujarat, India</p>
        </div>

        <div className="contact-form">
          <h3>Send us a message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <FaUser className="input-icon" /> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <FaEnvelope className="input-icon" /> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                <FaComment className="input-icon" /> Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="send-button">Send</button>
          </form>

          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
