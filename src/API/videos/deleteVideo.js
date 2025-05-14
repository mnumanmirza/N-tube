import axios from 'axios';

export const deleteVideo = async (videoId) => {
  try {
    if (!videoId) {
      throw new Error('Invalid video ID');
    }
    const token = localStorage.getItem('accessToken');
    const apiUrl = `${process.env.REACT_APP_URI}/videos/delete-video?videoId=${videoId}`;
    const response = await axios.delete(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting video:', error.response || error);
    throw new Error(error.response?.data?.message || 'Failed to delete video');
  }
};