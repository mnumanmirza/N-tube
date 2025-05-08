import axios from 'axios';

// Use the REACT_APP_URI from the .env file
const BASE_URL = process.env.REACT_APP_URI;

export const addComment = async (videoId, commentText) => {
  try {
    console.log(`📡 Adding comment to: ${BASE_URL}/comments/add?videoId=${videoId}`); // Log the full URL

    const token = localStorage.getItem('accessToken'); // Get the token from localStorage
    if (!token) {
      console.error('❌ No access token found in localStorage');
      throw new Error('Unauthorized: No access token');
    }

    const payload = { text: commentText }; // Request payload
    console.log('📦 Request Payload:', payload);

    const response = await axios.post(
      `${BASE_URL}/comments/add`,
      payload, // Send the comment text in the request body
      {
        params: { videoId }, // Pass videoId as a query parameter
        headers: {
          Authorization: `Bearer ${token}`, // Include the Authorization header
          'Content-Type': 'application/json', // Ensure the content type is JSON
        },
      }
    );

    console.log('✅ Comment added successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Error adding comment:', error.response?.data || error.message);
    console.error('❌ Full Error Object:', error); // Log the full error object for debugging
    throw error;
  }
};
