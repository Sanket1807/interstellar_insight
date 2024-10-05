import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddNewEvents = lazy(() => import('./AddEvent'));

const AdminPanel = () => {
    const navigate = useNavigate();
    const [pendingUsers, setPendingUsers] = useState([]);
    const [contactMessages, setContactMessages] = useState([]);
    const [activeSection, setActiveSection] = useState('approvals'); 

    useEffect(() => {
        const fetchPendingUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/pending-approvals', { withCredentials: true });
                setPendingUsers(response.data);
            } catch (error) {
                console.error('Error fetching pending users:', error);
            }
        };

        const fetchContactMessages = async () => {
            try {
                const response = await axios.get('http://localhost:8080/contact-messages', { withCredentials: true });
                setContactMessages(response.data);
            } catch (error) {
                console.error('Error fetching contact messages:', error);
            }
        };

        fetchPendingUsers();
        fetchContactMessages();
    }, []);

    const handleApproval = async (userId) => {
        try {
            await axios.post('http://localhost:8080/approve-reject-user', {
                userId,
                action: 'approve',
            }, { withCredentials: true });
            setPendingUsers(prev => prev.filter(user => user._id !== userId)); 
        } catch (error) {
            console.error('Error approving user:', error);
        }
    };

    const handleRejection = async (userId) => {
        try {
            await axios.post('http://localhost:8080/approve-reject-user', {
                userId,
                action: 'reject',
            }, { withCredentials: true });
            setPendingUsers(prev => prev.filter(user => user._id !== userId));
        } catch (error) {
            console.error('Error rejecting user:', error);
        }
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'events':
                return (
                    <Suspense fallback={<div>Loading Add New Events...</div>}>
                        <AddNewEvents inAdminPanel={true} />
                    </Suspense>

                );
            case 'approvals':
                return (
                    <div>
                        <h2>Pending User Approvals</h2>
                        {pendingUsers.length === 0 ? (
                            <p>No pending approvals.</p>
                        ) : (
                            <ul>
                                {pendingUsers.map(user => (
                                    <li key={user._id}>
                                        <p>{user.username} - {user.role}</p>
                                        <div style={{ display: 'flex', gap: '20px' }}>
                                            <button
                                                style={{ width: '200px' }}
                                                onClick={() => handleApproval(user._id)}
                                            >
                                                Approve
                                            </button>
                                            <button
                                                style={{ width: '200px' }}
                                                onClick={() => handleRejection(user._id)}
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                );
            case 'messages':
                return (
                    <div>
                        <h2>Feedback Messages</h2>
                        {contactMessages.length === 0 ? (
                            <p>No contact messages available.</p>
                        ) : (
                            <ul>
                                {contactMessages.map(message => (
                                    <li key={message._id}>
                                        <p><strong>Name:</strong> {message.name}</p>
                                        <p><strong>Email:</strong> {message.email}</p>
                                        <p><strong>Message:</strong> {message.message}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                );
            default:
                return <p>Select an option from the sidebar.</p>;
        }
    };

    return (
        <div className="admin-panel">
            <div className="admin-panel-container">
                <div className="sidebar">
                    <button onClick={() => setActiveSection('events')}>Add New Events</button>
                    <button onClick={() => setActiveSection('approvals')}>Pending User Approvals</button>
                    <button onClick={() => setActiveSection('messages')}>Feedback Messages</button>
                </div>

                <div className="content">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
