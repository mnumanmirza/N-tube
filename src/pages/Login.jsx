import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Login } from '../API/loginUser';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function LoginComponent() {
    const [data, setData] = useState({
        username: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!data.username || !data.password) {
            toast.error('Username aur password bharain.');
            return;
        }

        try {
            const response = await Login(data);
            console.log('Login response:', response);

            const token = response?.accessToken;

            if (token) {
                localStorage.setItem('token', token);
                toast.success('Login successful!');
                setTimeout(() => {
                    navigate('/MyChanelEmptypg');
                }, 1000); // Toast show hone ka time
            } else {
                toast.error('Invalid username or password');
            }
        } catch (error) {
            console.error('Login error:', error.message);
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
                <div className="mx-auto inline-block w-16">
                    {/* SVG Logo if needed */}
                </div>
                <div className="mb-6 w-full text-center text-2xl font-semibold uppercase">Play</div>
                <form className="mx-auto my-8 flex w-full max-w-sm flex-col px-4" onSubmit={handleSubmit}>
                    <div className="grid">
                        <label className='mb-1 inline-block text-gray-300'>Username:</label>
                        <div className="mb-4 rounded-lg border bg-transparent px-3 py-2 flex">
                            <input
                                type="text"
                                placeholder="Enter username"
                                name="username"
                                value={data.username}
                                onChange={handleOnChange}
                                className="w-full h-full outline-none bg-transparent"
                            />
                        </div>
                    </div>

                    <div>
                        <label className='mb-1 inline-block text-gray-300'>Password:</label>
                        <div className="mb-4 rounded-lg border bg-transparent px-3 py-2 flex items-center">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                                name="password"
                                value={data.password}
                                onChange={handleOnChange}
                                className="w-full h-full outline-none bg-transparent"
                            />
                            <div className="cursor-pointer text-xl ml-2" onClick={() => setShowPassword(prev => !prev)}>
                                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                            </div>
                        </div>
                    </div>

                    <button className="bg-[#ae7aff] px-4 py-3 text-black rounded-lg">
                        Login
                    </button>

                    <div className="text-center mt-4">
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
