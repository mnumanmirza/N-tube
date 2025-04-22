import axios from 'axios';

const API = axios.create({
  baseURL: 'https://dev-api-tubetest.vercel.app', // ✅ Correct base URL
});

export const getAllVideos = async () => {
  try {
    const token = localStorage.getItem('accessToken'); // ✅ Get real token from storage

    const response = await API.get('/videos/get-all-videos', {
      headers: {
        Authorization: `Bearer ${token}`, // ✅ Use real token
      },
    });

    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error.response?.data || error.message);
    throw new Error('Failed to fetch videos. Please try again.');
  }
};
