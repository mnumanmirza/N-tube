import axios from 'axios';
import { toast } from 'react-toastify';

export const updateAccountDetail = async (formData) => {
  try {
    console.log('FormData being sent:', Object.fromEntries(formData.entries()));

    const response = await axios.put(
      `${process.env.REACT_APP_URI}/users/update-account-detail`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    );

    console.log('Response from server:', response.data);

    if (!response.data.success) {
      throw new Error(response.data.message || 'Update failed');
    }

    toast.success(response.data.message || 'Profile updated successfully!');
    return {
      success: true,
      data: response.data.data, // Ensure this matches the backend response structure
    };
  } catch (error) {
    console.error('Update error:', error);
    const errorMessage = error.response?.data?.message || error.message || 'Update failed!';
    toast.error(errorMessage);
    return { success: false };
  }
};