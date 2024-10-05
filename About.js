import React from 'react';
import './App.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function About() {
  return (
    <div className="about-page-bg">
      <div className="about-page">
        <h2>About Us</h2>
        <p>
          Interstellar Insight is your premier source for space exploration and
          astronomy enthusiasts. We are dedicated to bringing you the latest news,
          breathtaking images, and captivating information about the universe.
        </p>
        <p>
          Our team of space enthusiasts and experts are committed to sharing their
          passion for the cosmos with you. Whether you're an amateur stargazer or a
          seasoned astronomer, we have something for everyone.
        </p>

        <h3>Our Mission</h3>
        <p>
          Our mission is to inspire and educate individuals about the wonders of the
          universe. We aim to foster a deep appreciation for space and science,
          encouraging exploration and discovery.
        </p>

        <h3>Meet Our Team</h3>
        <p>
          Our dedicated team of astronomers, scientists, and space enthusiasts work
          tirelessly to bring you the most up-to-date and exciting content about space.
          Learn more about our team members and their contributions.
        </p>

        <h3>Join Our Community</h3>
        <p>
          Interstellar Insight is more than just a website; it's a community of space
          lovers from around the world. Join our forums, participate in discussions,
          and connect with like-minded individuals who share your passion for the cosmos.
        </p>

        <h3>Stay Informed</h3>
        <p>
          Sign up for our newsletter to receive the latest space news, astronomy events,
          and exclusive content delivered directly to your inbox. Don't miss out on
          exciting updates from Interstellar Insight.
        </p>

        <h3 align="center">Connect with us on Social Media</h3>
        <div className="social-media-icons">
          <a href="https://twitter.com/InterstellarInsight" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.facebook.com/InterstellarInsight" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="social-icon" />
          </a>
          <a href="https://www.instagram.com/interstellarinsight/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/company/interstellarinsight" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
