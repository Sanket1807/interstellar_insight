import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        phoneNumber: '',
        role: 'User',
    });

    const [errors, setErrors] = useState({});
    const [existingUserError, setExistingUserError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost:8080/signup', {
                    username: formData.username,
                    password: formData.password,
                    email: formData.email,
                    phoneNumber: formData.phoneNumber,
                    role: formData.role,
                    approved: false, 
                });

                alert(
                    `Sign-up successful! Your account is pending admin approval. You will be able to log in once approved.`
                );
                navigate('/login');
            } catch (error) {
                setExistingUserError('User with the provided details already exists...');
            }
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (data) => {
        const errors = {};

        if (!data.username) {
            errors.username = 'Username is required...';
        }

        if (!data.password) {
            errors.password = 'Password is required...';
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = 'Confirm Password is required...';
        }

        if (data.password !== data.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match...';
        }

        if (!data.email) {
            errors.email = 'Email is required';
        } else {
            const emailRegex = /^[a-z][a-z0-9_.+-]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            if (!emailRegex.test(data.email)) {
                errors.email = 'Invalid email format...';
            }
        }

        if (!data.phoneNumber) {
            errors.phoneNumber = 'Phone Number is required';
        } else {
            const phoneNumberRegex = /^(\+91[\s]?)?[0]?(91)?[789]\d{9}$/;
            if (!phoneNumberRegex.test(data.phoneNumber)) {
                errors.phoneNumber = 'Invalid phone number format...';
            }
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
                <h2 align="center">Sign Up</h2>
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
                    <label>
                        Confirm Password:
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </label>
                    <br />
                    <label>
                        Phone Number:
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                    </label>
                    <br />
                    <label>
                        Role:
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </label>
                    <br />
                    {existingUserError && <p className="error">{existingUserError}</p>}
                    <button type="submit">Sign Up</button>
                </form>
                <p>
                    Already have an account? <Link to="/login" className="signup-link">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
