export const getAuthToken = () => {
    return localStorage.getItem('authToken'); // Adjust as necessary for your token storage
};

export const setAuthToken = (token) => {
    localStorage.setItem('authToken', token);
};

export const clearAuthToken = () => {
    localStorage.removeItem('authToken');
};
