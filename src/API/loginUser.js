import axios from "axios";

// Create an Axios instance with a base URL
const API = axios.create({ baseURL: process.env.REACT_APP_URI });

// LOGIN USER
export const Login = async (credentials) => {
    try {
        const response = await API.post('/users/login', credentials);
        console.log("Login API Response:", response.data);

        // 🔍 Check if nested token
        const token = response.data?.data?.accessToken || response.data?.accessToken;

        if (!token) {
            throw new Error("No access token in response");
        }

        return { accessToken: token }; // Return in expected format
    } catch (error) {
        console.error("Login failed:", error?.response?.data?.message || error.message);
        if (error?.response?.status === 401 || error?.response?.data?.message === "Invalid username or password") {
            throw new Error("Invalid username or password");
        }
        throw new Error("Login failed. Please try again.");
    }
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

// loginUser.js
export const refreshToken = async () => {
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

