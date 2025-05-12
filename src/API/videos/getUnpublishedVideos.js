import axios from 'axios';

export const getUnpublishedVideos = async (page = 1, limit = 10) => {
  try {
    const token = localStorage.getItem('accessToken'); // Retrieve token
    const response = await axios.get(
      `${process.env.REACT_APP_URI}/videos/get-all-videos?page=${page}&limit=${limit}&isPublished=false`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add Authorization header
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching unpublished videos:', error.response || error);
    throw new Error(error.response?.data?.message || 'Failed to fetch unpublished videos');
  }
};