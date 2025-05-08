// src/pages/Signup.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../API/register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    avatar: null,
    coverImage: null
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validations = [
    { check: () => !formData.fullName || !formData.email || !formData.username || !formData.password || !formData.confirmPassword, message: 'All fields are required' },
    { check: () => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email), message: 'Invalid email address' },
    { check: () => formData.password.length < 6, message: 'Password must be at least 6 characters' },
    { check: () => formData.password !== formData.confirmPassword, message: 'Passwords do not match' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validations.find(v => v.check());
    if (validationError) {
      toast.warn(validationError.message, { autoClose: 3000 });
      return;
    }

    setLoading(true);
    const result = await registerUser(formData);
    setLoading(false);

    if (result.success) {
      localStorage.setItem('accessToken', result.token);
      navigate('/login');
    }
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.files[0] }));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <ToastContainer position="top-center" />
      <div className="w-full max-w-md bg-gray-800 rounded-xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-purple-400 mb-4 text-center">SIGN UP</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input id="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-700 border rounded-lg text-white" />
          <input id="email" type="email" placeholder="Email *" value={formData.email} onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-700 border rounded-lg text-white" />
          <input id="username" placeholder="Username *" value={formData.username} onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-700 border rounded-lg text-white" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-1">Avatar</label>
              <input type="file" name="avatar" onChange={handleFileChange}
                className="file:py-2 file:px-4 file:bg-purple-500 file:text-white" accept="image/*" />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Cover Image</label>
              <input type="file" name="coverImage" onChange={handleFileChange}
                className="file:py-2 file:px-4 file:bg-purple-500 file:text-white" accept="image/*" />
            </div>
          </div>
          <input id="password" type="password" placeholder="Password *" value={formData.password} onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-700 border rounded-lg text-white" />
          <input id="confirmPassword" type="password" placeholder="Confirm Password *" value={formData.confirmPassword} onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-700 border rounded-lg text-white" />
          <button type="submit" disabled={loading}
            className="w-full bg-purple-600 py-3 rounded-lg text-white font-bold disabled:opacity-50">
            {loading ? 'Registering…' : 'Create Account'}
          </button>
        </form>
        <p className="mt-6 text-center text-gray-400">
          Already have an account? <Link to="/login" className="text-purple-400">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
