import API from "./api"; // ✅ Only one Axios instance
import { refreshTokenAPI, startAutoTokenRefresh } from "./refreshTokenAPI";

// ✅ Refresh Token Function
export const refreshToken = async () => {
    try {
        const data = await refreshTokenAPI(); // ✅ Uses Axios inside refreshTokenAPI

        const expirationTime = new Date(Date.now() + 5 * 60 * 1000);
        const isoExpiration = expirationTime.toISOString();

        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("expiredAt", isoExpiration);

        console.log("🔄 Token Refreshed:");
        console.log("🔐 New Access Token:", data.accessToken);
        console.log("🕒 New Expiry:", isoExpiration);

        return data.accessToken;
    } catch (error) {
        console.error("❌ Failed to refresh token:", error?.response?.data?.message || error.message);
        localStorage.clear();
        throw new Error("Token refresh failed. Please log in again.");
    }
};

// ✅ LOGIN
export const Login = async (credentials) => {
    const response = await API.post("/users/login", credentials);
    const { accessToken, refreshToken } = response.data?.data || {};

    if (!accessToken || !refreshToken) {
        console.error("❌ Missing tokens in login response");
        throw new Error("Missing tokens in login response");
    }

    const expirationTime = new Date(Date.now() + 5 * 60 * 1000);
    const isoExpiration = expirationTime.toISOString();

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("expiredAt", isoExpiration);

    console.log("✅ User logged in successfully");
    console.log("🔐 Access Token:", accessToken);
    console.log("🔐 Refresh Token:", refreshToken);
    console.log("🕒 Token Expiry:", isoExpiration);

    startAutoTokenRefresh(); // 🔄 Start auto-refresh loop

    return { accessToken, refreshToken };
};

// ✅ CURRENT USER
export const GetCurrentUser = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) throw new Error("No token found. Please log in again.");

    try {
        const response = await API.get("/users/get-user", {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        return response.data;
    } catch (error) {
        console.error("❌ Failed to get current user:", error?.response?.data?.message || error.message);
        throw new Error("Failed to fetch user data. Please try again.");
    }
};

// ✅ SINGLE VIDEO
export const GetSingleVideo = async (videoId) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) throw new Error("No token found. Please log in again.");

    try {
        const response = await API.get(`/videos/get-single-video?videoId=${videoId}`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        return response.data;
    } catch (error) {
        console.error("❌ Failed to get video:", error?.response?.data?.message || error.message);
        throw new Error("Failed to fetch video. Please try again.");
    }
};
