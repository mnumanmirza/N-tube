import axios from 'axios';
import API from '../users/api';

export const getCurrentUser = async () => {
  try {
    const response = await API.get('/users/get-user');

    // Extract user data from the response
    const userData = response.data.data;

    if (!userData) {
      throw new Error('User data not found in response');
    }

    return {
      success: true,
      user: {
        fullName: userData.fullName,
        username: userData.username,
        subscribersCount: userData.subscribersCount || 0,
        avatar: userData.avatar,
        coverImage: userData.coverImage,
        email: userData.email,
        createdAt: userData.createdAt,
      },
    };
  } catch (error) {
    console.error('❌ User fetch error:', error.response?.data || error.message);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to load user data',
    };
  }
};