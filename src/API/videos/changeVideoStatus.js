import axios from 'axios';

export const changeVideoStatus = async (videoId) => {
  try {
    if (!videoId) {
      throw new Error('Invalid video ID'); // Ensure videoId is not empty
    }

    const token = localStorage.getItem('accessToken'); // Retrieve token
    const apiUrl = `${process.env.REACT_APP_URI}/videos/change-video-status?videoId=${videoId}`; // Correctly construct the URL
    console.log('API URL:', apiUrl); // Debugging log

    const response = await axios.patch(
      apiUrl,
      {}, // Empty body
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add Authorization header
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error changing video status:', error.response || error);
    throw new Error(error.response?.data?.message || 'Failed to change video status');
  }
};