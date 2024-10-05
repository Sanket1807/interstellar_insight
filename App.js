import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SignUp from './SignUp.js';
import Login from './Login.js';
import Home from './Home.js';
import AdminPanel from './AdminPanel.js';
import APOD from './Apod.js';
import Weights from './Weights.js';
import Starmap from './Starmap.js';
import IssTracker from './IssTracker.js';
import CommunityEvents from './CommunityEvents.js';
import NaturalEvents from './NaturalEvents.js';
import Quiz from './Quiz.js';
import Subscribe from './Subscribe.js';
import AddEvents from './AddEvent.js';

import Buy from './Buy'; 
import News from './News';
import Dictionary from './Dictionary';

import Contact from './Contact.js';
import About from './About.js';
import Navbar from './Navbar.js';  
import { getAuthToken } from './auth.js'; 
import './App.css';

const PrivateRoute = ({ element: Element, requiredRole, ...rest }) => {
    const token = getAuthToken();
    const userRole = localStorage.getItem('userRole'); 

    if (!token) {
        return <Navigate to="/login" />; 
    }

    if (requiredRole && userRole !== requiredRole) {
        return <Navigate to="/home" />; 
    }

    return <Element {...rest} />;
};

const AppContent = () => {
    const location = useLocation();

    const hideNavbarRoutes = ['/login', '/signup'];

    return (
        <>
            {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/home" element={<PrivateRoute element={Home} />} />
                <Route path="/admin-panel" element={<PrivateRoute element={AdminPanel} requiredRole="Admin" />} />
                <Route path="/apod" element={<PrivateRoute element={APOD} />} />
                <Route path="/weights" element={<PrivateRoute element={Weights} />} />
                <Route path="/starmap" element={<PrivateRoute element={Starmap} />} />
                <Route path="/iss-tracker" element={<PrivateRoute element={IssTracker} />} />
                <Route path="/natural-events" element={<PrivateRoute element={NaturalEvents} />} />
                <Route path="/community-events" element={<PrivateRoute element={CommunityEvents} />} />
                <Route path="/buy" element={<PrivateRoute element={Buy} />} /> 
                <Route path="/news" element={<PrivateRoute element={News} />} />
                <Route path="/dictionary" element={<PrivateRoute element={Dictionary} />} />
                <Route path="/quiz" element={<PrivateRoute element={Quiz} />} />
                <Route path="/subscribe" element={<PrivateRoute element={Subscribe} />} />
                <Route path="/add-event" element={<PrivateRoute element={AddEvents} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
};

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;
