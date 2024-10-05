import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';  
import axios from 'axios';
import { clearAuthToken } from './auth.js';
import './App.css';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const [isAdmin, setIsAdmin] = useState(false); 

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/check-admin', { withCredentials: true }); 
                setIsAdmin(response.data.isAdmin); 
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8080/logout', {}, { withCredentials: true });
            clearAuthToken();
            navigate('/login');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/home" className="navbar-logo">Interstellar Insight</Link>
                {location.pathname !== '/home' && (
                    <Link to="/home" className="navbar-home">Home</Link>
                )}
                {isAdmin && (
                    <Link to="/admin-panel" className="navbar-admin">Admin Panel</Link>
                )} 
            </div>
            <div className="navbar-right">
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
