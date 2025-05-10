import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { changePassword } from '../API/users/changePassword';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

function ChangePassword() {
    const [passwords, setPasswords] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState({
        old: false,
        new: false,
        confirm: false
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswords(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (passwords.newPassword !== passwords.confirmPassword) {
            toast.error('New passwords do not match!');
            return;
        }

        const { success } = await changePassword({
            oldPassword: passwords.oldPassword,
            newPassword: passwords.newPassword,
            confirmPassword: passwords.confirmPassword
        });

        if (success) {
            navigate('/mycontent');
        }
    };

    return (
        <div className="h-screen overflow-y-auto bg-[#121212] text-white">
            <div className="mx-auto my-8 flex w-full max-w-sm flex-col px-4">
                <div className="mb-6 w-full text-center text-2xl font-semibold uppercase">
                    Change Password
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Old Password */}
                    <div>
                        <label className='mb-1 text-gray-300'>Old Password:</label>
                        <div className="flex items-center rounded-lg border px-3 py-2 bg-transparent">
                            <input
                                type={showPassword.old ? "text" : "password"}
                                name="oldPassword"
                                value={passwords.oldPassword}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none"
                            />
                            <button
                                type="button"
                                className="ml-2 text-xl"
                                onClick={() => setShowPassword(prev => ({ ...prev, old: !prev.old }))}
                            >
                                {showPassword.old ? <IoMdEyeOff /> : <IoMdEye />}
                            </button>
                        </div>
                    </div>

                    {/* New Password */}
                    <div>
                        <label className='mb-1 text-gray-300'>New Password:</label>
                        <div className="flex items-center rounded-lg border px-3 py-2 bg-transparent">
                            <input
                                type={showPassword.new ? "text" : "password"}
                                name="newPassword"
                                value={passwords.newPassword}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none"
                            />
                            <button
                                type="button"
                                className="ml-2 text-xl"
                                onClick={() => setShowPassword(prev => ({ ...prev, new: !prev.new }))}
                            >
                                {showPassword.new ? <IoMdEyeOff /> : <IoMdEye />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className='mb-1 text-gray-300'>Confirm Password:</label>
                        <div className="flex items-center rounded-lg border px-3 py-2 bg-transparent">
                            <input
                                type={showPassword.confirm ? "text" : "password"}
                                name="confirmPassword"
                                value={passwords.confirmPassword}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none"
                            />
                            <button
                                type="button"
                                className="ml-2 text-xl"
                                onClick={() => setShowPassword(prev => ({ ...prev, confirm: !prev.confirm }))}
                            >
                                {showPassword.confirm ? <IoMdEyeOff /> : <IoMdEye />}
                            </button>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="bg-[#ae7aff] px-4 py-3 text-black rounded-lg mt-4"
                    >
                        Change Password
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <button 
                        onClick={() => navigate(-1)}
                        className="text-blue-500 hover:underline"
                    >
                        Back to previous page
                    </button>
                </div>
            </div>
            <ToastContainer position="top-center" /> {/* Add ToastContainer */}
        </div>
    );
}

export default ChangePassword;