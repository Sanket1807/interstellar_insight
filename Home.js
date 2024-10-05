import React from 'react';
import './App.css';
import backgroundVideo from './video.mp4';

const Home = () => {
    return (
        <div className="home-background">
            <video autoPlay muted loop className="background-video">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h1 className="home-title">Welcome to the Interstellar Insight</h1>
            <div className="options-container">
                <div className="option-card" onClick={() => window.location.href = '/apod'}>
                    APOD
                </div>
                <div className="option-card" onClick={() => window.location.href = '/iss-tracker'}>
                    ISS Tracker
                </div>
                <div className="option-card" onClick={() => window.location.href = '/starmap'}>
                    Starmap
                </div>
                <div className="option-card" onClick={() => window.location.href = '/natural-events'}>
                    Upcoming Natural Events
                </div>
                <div className="option-card" onClick={() => window.location.href = '/community-events'}>
                    Upcoming Community Events
                </div>
                <div className="option-card" onClick={() => window.location.href = '/weights'}>
                    Ages and Weights on Other Planets
                </div>
                <div className="option-card" onClick={() => window.location.href = '/quiz'}>
                    Interactive Quiz
                </div>
                <div className="option-card" onClick={() => window.location.href = '/buy'}>
                    Buy Telescopes, Binoculars, and Cameras
                </div>
                <div className="option-card" onClick={() => window.location.href = '/news'}>
                    Astronomy News
                </div>
                <div className="option-card" onClick={() => window.location.href = '/dictionary'}>
                    Astronomical Glossary
                </div>
                <div className="option-card" onClick={() => window.location.href = '/subscribe'}>
                    Email Subscription
                </div>
                <div className="option-card" onClick={() => window.location.href = '/about'}>
                    About
                </div>
                <div className="option-card" onClick={() => window.location.href = '/contact'}>
                    Contact
                </div>
            </div>
        </div>
    );
};

export default Home;
