import axios from "axios";

// Create an Axios instance with a base URL
const API = axios.create({ baseURL: process.env.REACT_APP_URI });

// Refresh Token Function
export const refreshToken = async () => {
    try {
        const response = await API.post('/users/refresh-token', {
            refreshToken: localStorage.getItem('refreshToken') // Get refresh token from localStorage
        });

        console.log("Refresh Token Response:", response.data); // Debugging backend response

        // Save the new tokens
        localStorage.setItem('accessToken', response.data.accessToken); // Save accessToken
        localStorage.setItem('refreshToken', response.data.refreshToken); // Save refreshToken

        return response.data.accessToken; // Return the new access token
    } catch (error) {
        console.error("Failed to refresh token:", error?.response?.data?.message || error.message); // Log the error
        throw new Error(error?.response?.data?.message || "Failed to refresh token. Please log in again.");
    }
};

// LOGIN USER
export const Login = async (credentials) => {
    try {
        const response = await API.post('/users/login', credentials);
        console.log("Login API Response:", response.data); // Debugging backend response

        // Extract tokens from nested data object
        const accessToken = response.data?.data?.accessToken;
        const refreshToken = response.data?.data?.refreshToken;

        if (!accessToken || !refreshToken) {
            console.error("Tokens missing in response:", response.data); // Log missing tokens
            throw new Error("No access or refresh token in response");
        }

        // Save tokens in localStorage
        localStorage.setItem('accessToken', accessToken); // Save accessToken
        localStorage.setItem('refreshToken', refreshToken); // Save refreshToken

        return { accessToken, refreshToken }; // Return tokens
    } catch (error) {
        console.error("Login failed:", error?.response?.data?.message || error.message); // Log the error
        if (error?.response?.status === 401 || error?.response?.data?.message === "Invalid username or password") {
            throw new Error("Invalid username or password");
        }
        throw new Error("Login failed. Please try again.");
    }
};

// Get Current USER
export const GetCurrentUser = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        throw new Error("No token found. Please log in again.");
    }
    try {
        const response = await API.get('/users/get-user', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to get current user:", error?.response?.data?.message || error.message);
        throw new Error(error?.response?.data?.message || "Failed to fetch user data. Please try again.");
    }
};

// Get Single Video
export const GetSingleVideo = async (videoId) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        throw new Error("No token found. Please log in again.");
    }
    try {
        const response = await API.get(`/videos/get-single-video?videoId=${videoId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to get single video:", error?.response?.data?.message || error.message);
        throw new Error(error?.response?.data?.message || "Failed to fetch video data. Please try again.");
    }
};
