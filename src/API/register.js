// src/API/register.js
import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = process.env.REACT_APP_URI;

export const registerUser = async (formData) => {
  try {
    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('username', formData.username);
    data.append('password', formData.password);
    if (formData.avatar) data.append('avatar', formData.avatar);
    if (formData.coverImage) data.append('coverImage', formData.coverImage);

    const response = await axios.post(`${BASE_URL}/users/register`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    toast.success('🎉 Registered successfully!');
    return { success: true, token: response.data?.token };
  } catch (error) {
    console.error('[DEBUG] Registration Error:', error);
    toast.error(error?.response?.data?.message || 'Registration failed');
    return { success: false };
  }
};
