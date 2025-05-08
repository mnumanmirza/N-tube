// src/API/refreshTokenAPI.js

import axios from "axios";

// ✅ Get base URL from .env
const BASE_URL = process.env.REACT_APP_URI;

// ✅ Call refresh token API
export const refreshTokenAPI = async () => {
    const storedRefreshToken = localStorage.getItem("refreshToken");
    if (!storedRefreshToken) throw new Error("Refresh token not found");

    try {
        console.log("🔄 Calling refreshTokenAPI...");

        const res = await axios.post(
            `${BASE_URL}/users/refresh-token`,
            { refreshToken: storedRefreshToken },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const { accessToken, refreshToken } = res.data?.data || {};

        if (!accessToken || !refreshToken) {
            console.error("⚠️ Invalid token response:", res.data);
            throw new Error("Invalid token response");
        }

        // Create expiration time
        const expirationTime = new Date(Date.now() + 5 * 60 * 1000);
        const isoWithOffset = expirationTime.toISOString();

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("expiredAt", isoWithOffset);

        console.log("✅ Token refreshed successfully. Expires at:", isoWithOffset);
        return { accessToken, refreshToken };
    } catch (error) {
        console.error("❌ Refresh Token API failed:", error?.response?.data || error.message);
        throw error;
    }
};

// ✅ Auto Refresh Logic
let refreshIntervalId;

export const startAutoTokenRefresh = () => {
    if (refreshIntervalId) clearInterval(refreshIntervalId);

    refreshIntervalId = setInterval(async () => {
        const expiry = localStorage.getItem("expiredAt");
        if (!expiry) return;

        const isExpired = new Date(expiry) < new Date();
        if (isExpired) {
            try {
                await refreshTokenAPI();
            } catch (err) {
                console.error("❌ Auto refresh failed:", err.message);
                localStorage.clear();
                window.location.href = "/login";
            }
        }
    }, 30 * 1000); // Check every 30 seconds
};
