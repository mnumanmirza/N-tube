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
