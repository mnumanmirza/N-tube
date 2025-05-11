import axios from 'axios';

export const updateAccountDetail = async (data) => {
  try {
    console.log('Sending data to updateAccountDetail API:', data);

    const response = await axios.put(
      `${process.env.REACT_APP_URI}/users/update-account-detail`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    );

    console.log('Response from updateAccountDetail API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in updateAccountDetail API:', error.response || error);
    throw new Error(error.response?.data?.message || 'Internal Server Error');
  }
};