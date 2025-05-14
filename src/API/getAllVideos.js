import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_URI,
});

export const getAllVideos = async (pageNum = 1, limit = 9) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await API.get(`/videos/get-all-videos?page=${pageNum}&limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error.response?.data || error.message);
    throw new Error('Failed to fetch videos. Please try again.');
  }
};
