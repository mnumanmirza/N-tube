import API from "../users/api";
import { startAutoTokenRefresh } from "./refreshTokenAPI";

export const Login = async (credentials) => {
    const res = await API.post("/users/login", credentials);
    const { accessToken, refreshToken } = res.data?.data || {};

    if (!accessToken || !refreshToken) {
        console.error("❌ Missing tokens in login response");
        throw new Error("Login failed");
    }

    const expiry = new Date(Date.now() + 5 * 60 * 1000).toISOString();

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("expiredAt", expiry);

    console.log("✅ User logged in successfully");
    console.log("🔐 AccessToken:", accessToken);
    console.log("🔐 RefreshToken:", refreshToken);
    console.log("🕒 Expires At:", expiry);

    startAutoTokenRefresh();

    return { accessToken, refreshToken };
};
