import axios from "axios";

// Create an Axios instance with a base URL
const API = axios.create({ baseURL: process.env.REACT_APP_URI });


// Get Single Video
export const GetSingleVideo = async (videoId) => {
    const accessToken = localStorage.getItem('token'); // Use token from localStorage
    if (!accessToken) {
        throw new Error("No token found. Please log in again.");
    }
    try {
        // Set Authorization header with accessToken
        const response = await API.get(`/videos/get-single-video?videoId=${videoId}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data; // Return the response data
    } catch (error) {
        console.error("Failed to get single video:", error?.response?.data?.message || error.message); // Log the error
        throw new Error(error?.response?.data?.message || "Failed to fetch video data. Please try again.");
    }
};