import axios from 'axios';

// Use the REACT_APP_URI from the .env file
const API = axios.create({
  baseURL: process.env.REACT_APP_URI, // Dynamically use the base URL from .env
});

export const getAllVideos = async () => {
  try {
    const token = localStorage.getItem('accessToken'); // Get the token from localStorage

    const response = await API.get('/videos/get-all-videos', {
      headers: {
        Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
      },
    });

    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error.response?.data || error.message);
    throw new Error('Failed to fetch videos. Please try again.');
  }
};
