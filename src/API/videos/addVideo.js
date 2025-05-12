// filepath: c:\Users\numan.NUMAN-LAPTOP\Desktop\Github\N-tube\src\API\videos\addVideo.js
import axios from 'axios';

export const addVideo = async (formData) => {
  try {
    const token = localStorage.getItem('accessToken'); // Retrieve the token from localStorage
    const response = await axios.post(
      `${process.env.REACT_APP_URI}/videos/add-video`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`, // Add the Authorization header
        },
      }
    );

    console.log('API Response:', response.data); // Debugging log
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response || error); // Debugging log
    throw new Error(error.response?.data?.message || 'Failed to upload the video');
  }
};