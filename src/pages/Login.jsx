import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Login } from '../api/loginUser'; // ✅ Correct path
import { startAutoTokenRefresh } from '../API/refreshTokenAPI'; // ✅ Correct path
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function LoginComponent() {
    const [data, setData] = useState({ username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    // ✅ Separate login handler
    const handleLogin = async (credentials) => {
        const response = await Login(credentials);

        if (response.accessToken && response.refreshToken) {
            const expirationTime = new Date(Date.now() + 5 * 60 * 1000);
            const isoWithOffset = expirationTime.toISOString().split('.')[0] + "+05:00";

            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('refreshToken', response.refreshToken);
            localStorage.setItem('expiredAt', isoWithOffset);

            startAutoTokenRefresh(); // ✅ Start auto-refresh
            return true;
        }

        throw new Error("Login failed. Invalid response from server.");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!data.username || !data.password) {
            toast.error('Please fill in both username and password.');
            return;
        }

        try {
            const success = await handleLogin(data);
            if (success) {
                toast.success('Login successful!');
                navigate('/MyChanelEmptypg');
            }
        } catch (error) {
            if (error.message === "Invalid username or password") {
                toast.error("Invalid username or password");
            } else {
                toast.error("Something went wrong, please try again.");
            }
        }
    };

    return (
        <div className="h-screen overflow-y-auto bg-[#121212] text-white">
            <div className="mx-auto my-8 flex w-full max-w-sm flex-col px-4">
                <div className="mx-auto inline-block w-16">{/* Logo */}</div>
                <div className="mb-6 w-full text-center text-2xl font-semibold uppercase">Play</div>

                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label className='mb-1 text-gray-300'>Username:</label>
                    <div className="mb-4 flex rounded-lg border px-3 py-2 bg-transparent">
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter username"
                            value={data.username}
                            onChange={handleOnChange}
                            className="w-full bg-transparent outline-none"
                        />
                    </div>

                    <label className='mb-1 text-gray-300'>Password:</label>
                    <div className="mb-4 flex items-center rounded-lg border px-3 py-2 bg-transparent">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter password"
                            value={data.password}
                            onChange={handleOnChange}
                            className="w-full bg-transparent outline-none"
                        />
                        <div
                            className="ml-2 cursor-pointer text-xl"
                            onClick={() => setShowPassword(prev => !prev)}
                        >
                            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                        </div>
                    </div>

                    <button type="submit" className="bg-[#ae7aff] px-4 py-3 text-black rounded-lg">
                        Login
                    </button>

                    <div className="mt-4 text-center">
                        <span className="text-gray-500">Don't have an account? </span>
                        <Link to="/signup" className="text-blue-500 hover:underline">Register</Link>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default LoginComponent;
