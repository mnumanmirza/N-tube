import axios from "axios";

// Create an Axios instance with a base URL
const API = axios.create({ baseURL: process.env.REACT_APP_URI });

// Refresh Token Function
export const refreshAuthToken = async () => {
    try {
        const response = await API.post('/users/refresh-token', {
            refreshToken: localStorage.getItem('refreshToken') // Get refresh token from localStorage
        });

        // Save the new access token and refresh token in localStorage
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);

        return response.data.accessToken; // Return the new access token
    } catch (error) {
        console.error("Failed to refresh token:", error?.response?.data?.message || error.message);
        throw new Error(error?.response?.data?.message || "Failed to refresh token. Please log in again.");
    }
};

// Auto-Logout Function
const autoLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login'; // Redirect to login page
};

// LOGIN USER
export const loginUser = async (credentials) => {
    try {
        const response = await API.post('/users/login', credentials);
        console.log("Login API Response:", response.data);

        // Extract tokens
        const accessToken = response.data?.accessToken;
        const refreshToken = response.data?.refreshToken;

        if (!accessToken || !refreshToken) {
            throw new Error("No access or refresh token in response");
        }

        return { accessToken, refreshToken }; // Return tokens
    } catch (error) {
        console.error("loginUser failed:", error?.response?.data?.message || error.message);
        if (error?.response?.status === 401 || error?.response?.data?.message === "Invalid username or password") {
            throw new Error("Invalid username or password");
        }
        throw new Error("Login failed. Please try again.");
    }
};

// Start Auto-Refresh Token Interval
export const startAutoRefresh = () => {
    const interval = setInterval(async () => {
        try {
            await refreshAuthToken(); // Refresh the token
        } catch (error) {
            console.error("Auto-refresh failed:", error.message);
            clearInterval(interval); // Stop the interval
            autoLogout(); // Log out the user
        }
    }, 300000); // 5 minutes (300,000 milliseconds)
};

// Get Current USER
export const GetCurrentUser = async () => {
    const accessToken = localStorage.getItem('token'); // Use token from localStorage
    if (!accessToken) {
        throw new Error("No token found. Please log in again.");
    }
    try {
        // Set Authorization header with accessToken
        const response = await API.get('/users/get-user', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data; // Return the response data
    } catch (error) {
        console.error("Failed to get current user:", error?.response?.data?.message || error.message); // Log the error
        throw new Error(error?.response?.data?.message || "Failed to fetch user data. Please try again.");
    }
};