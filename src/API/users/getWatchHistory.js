import axios from 'axios';

export const getWatchHistory = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_URI}/users/get-watch-history`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });

    console.log('Response from getWatchHistory API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in getWatchHistory API:', error.response || error);
    throw new Error(error.response?.data?.message || 'Failed to fetch watch history');
  }
};