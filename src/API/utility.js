import axios from "axios";

// Create an Axios instance with a base URL
const API = axios.create({ baseURL: process.env.REACT_APP_URI });

// Refresh Token Function
export const refreshToken = async () => {
    try {
        const response = await API.post('/users/refresh-token', {
            refreshToken: localStorage.getItem('refreshToken') // Get refresh token from localStorage
        });

        // Save the new access token and refresh token in localStorage
        localStorage.setItem('accessToken', response.data.accessToken); // Save accessToken
        localStorage.setItem('refreshToken', response.data.refreshToken); // Save refreshToken

        return response.data.accessToken; // Return the new access token
    } catch (error) {
        console.error("Failed to refresh token:", error?.response?.data?.message || error.message);
        throw new Error(error?.response?.data?.message || "Failed to refresh token. Please log in again.");
    }
};

// LOGIN USER
export const Login = async (credentials) => {
    try {
        const response = await API.post('/users/login', credentials);
        console.log("Login API Response:", response.data);

        // Extract tokens from nested data object
        const accessToken = response.data?.data?.accessToken;
        const refreshToken = response.data?.data?.refreshToken;

        if (!accessToken || !refreshToken) {
            throw new Error("No access or refresh token in response");
        }

        // Save tokens in localStorage
        localStorage.setItem('accessToken', accessToken); // Save accessToken
        localStorage.setItem('refreshToken', refreshToken); // Save refreshToken

        return { accessToken, refreshToken }; // Return tokens
    } catch (error) {
        console.error("Login failed:", error?.response?.data?.message || error.message);
        if (error?.response?.status === 401 || error?.response?.data?.message === "Invalid username or password") {
            throw new Error("Invalid username or password");
        }
        throw new Error("Login failed. Please try again.");
    }
};



