// src/API/getAllComments.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllComments = async (videoId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/v1/comments/get-all?videoId=${videoId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};