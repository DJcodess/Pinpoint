// src/utils/isAuthenticated.js
import Cookies from 'js-cookie';

const isAuthenticated = () => {
    const token = Cookies.get('user');
    return !!token; // Returns true if token exists, false otherwise
};

export default isAuthenticated;
