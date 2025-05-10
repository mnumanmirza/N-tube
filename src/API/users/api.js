
import axios from "axios";
import { refreshTokenAPI } from "./refreshTokenAPI";

const BASE_URL = "https://dev-api-tubetest.vercel.app";

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
// src/services/api.js
// Mock implementation of the updateAccountDetail API

export async function updateAccountDetail(data) {
  // Simulate API delay with a Promise
  return new Promise((resolve) => {
    setTimeout(() => {
      // For this mock, we just resolve with a success response
      resolve({ success: true });
    }, 1000);
  });
}


API.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const newTokens = await refreshTokenAPI();
                console.log("🔄 Access Token refreshed inside interceptor");
                localStorage.setItem("accessToken", newTokens.accessToken);
                localStorage.setItem("refreshToken", newTokens.refreshToken);

                originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
                return API(originalRequest);
            } catch (err) {
                console.error("❌ Refresh token failed in interceptor. Logging out...", err);
                localStorage.clear();
                window.location.href = "/login";
                return Promise.reject(err); // Properly reject the promise with the error
            }
        }

        return Promise.reject(error);
    }
);

export default API;
