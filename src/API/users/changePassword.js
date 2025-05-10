// API/users/changePassword.js
import axios from 'axios';
import { toast } from 'react-toastify';

export const changePassword = async (passwords) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_URI}/users/change-password`,
      passwords,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    );

    toast.success(response.data.message || 'Password changed successfully!');
    return { success: true };
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Password change failed!';
    toast.error(errorMessage);
    return { success: false };
  }
};