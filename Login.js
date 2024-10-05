import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { setAuthToken } from './auth.js';  

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost:8080/login', {
                    username: formData.username,
                    password: formData.password,
                }, { withCredentials: true });
    
                console.log(response.data);
    
                if (response.status === 200) {

    
                    setAuthToken(response.data.token); 
                    localStorage.setItem('userRole', response.data.user.role); 
    
                    if (response.data.user.role === 'Admin') {
                        navigate('/admin-panel'); 
                    } else {
                        navigate('/home'); 
                    }
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    setLoginError('Invalid username or password');
                } else {
                    setLoginError('Something went wrong. Please try again.');
                }
            }
        } else {
            setErrors(validationErrors);
        }
    };
    

    const validateForm = (data) => {
        const errors = {};

        if (!data.username) {
            errors.username = 'Username is required';
        }

        if (!data.password) {
            errors.password = 'Password is required';
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: null,
        });
    };

    return (
        <div className="background">
            <div className="container">
                <h2 align="center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </label>
                    <br />
                    {loginError && <p className="error">{loginError}</p>}
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p align="center">
                    Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
