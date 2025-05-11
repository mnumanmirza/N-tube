import axios from 'axios';

export const updateCoverImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append('coverImage', file);

    const response = await axios.post(
      `${process.env.REACT_APP_URI}/users/update-cover-image`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    );

    console.log('Response from updateCoverImage API:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error in updateCoverImage API:', error.response || error);
    throw new Error(error.response?.data?.message || 'Failed to update cover image');
  }
};