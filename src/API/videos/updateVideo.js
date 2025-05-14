import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_URI,
});

export const updateVideo = async (videoId, data) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await API.put(
      `/videos/update-video?videoId=${videoId}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating video:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Failed to update video');
  }
};