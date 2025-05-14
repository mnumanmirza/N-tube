import axios from 'axios';

export const changeVideoStatus = async (videoId) => {
  try {
    if (!videoId) {
      throw new Error('Invalid video ID');
    }

    const token = localStorage.getItem('accessToken');
    // API URL exactly as you requested
    const apiUrl = `${process.env.REACT_APP_URI}/videos/change-video-status?videoId=${videoId}&=`;
    console.log('API URL:', apiUrl);

    // Use POST instead of PATCH
    const response = await axios.post(
      apiUrl,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error changing video status:', error.response || error);
    throw new Error(error.response?.data?.message || 'Failed to change video status');
  }
};