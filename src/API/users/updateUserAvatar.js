import axios from 'axios';

export const updateUserAvatar = async (file) => {
  try {
    const formData = new FormData();
    formData.append('avatar', file);

    const response = await axios.post(
      `${process.env.REACT_APP_URI}/users/update-avatar`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    );

    console.log('Response from updateUserAvatar API:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error in updateUserAvatar API:', error.response || error);
    throw new Error(error.response?.data?.message || 'Failed to update avatar');
  }
};