import axiosInstance from './axiosInstance';

export const getUsers = async () => {
  try {
    const response = await axiosInstance.get('/users'); // URL: https://dev-api-tubetest.vercel.app/users
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
