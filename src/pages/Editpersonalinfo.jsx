import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import SideBar from '../Components/SideBar';
import { updateAccountDetail } from '../API/users/updateAccountDetail';
import 'react-toastify/dist/ReactToastify.css';

const Editpersonalinfo = () => {
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    avatar: '',
    coverImage: '',
  });
  const [loading, setLoading] = useState(false);
  const BASE_URL = process.env.REACT_APP_URI;

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const res = await fetch(`${BASE_URL}/users/get-user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error('Failed to fetch user data');

      const data = await res.json();
      setUserData(data?.user);
      setFormData({
        fullName: data?.user?.fullName || '',
        email: data?.user?.email || '',
        avatar: data?.user?.avatar || '',
        coverImage: data?.user?.coverImage || '',
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error('Failed to load user data');
    }
  };

  useEffect(() => { fetchUserData(); }, []);

  useEffect(() => {
    if (location.state?.refresh) {
      fetchUserData();
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    if (files[0]) {
      setFormData(prev => ({ 
        ...prev, 
        [id]: files[0],
        [`${id}Preview`]: URL.createObjectURL(files[0]) 
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      
      if (formData.avatar instanceof File) {
        formDataToSend.append('avatar', formData.avatar);
      }
      if (formData.coverImage instanceof File) {
        formDataToSend.append('coverImage', formData.coverImage);
      }

      const response = await updateAccountDetail(formDataToSend);
      
      if (response.success) {
        toast.success('Profile updated successfully!');
        fetchUserData();
      }
    } catch (error) {
      console.error('Update error:', error);
      toast.error(error.message || 'Update failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <SideBar />
      <div className="bg-[#121212] text-white">
        <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
          <section className="w-full pl-4 pb-4 sm:pl-6 sm:pb-6 md:pl-8 md:pb-8 lg:pl-12 lg:pb-12 xl:pl-16 xl:pb-16">
            {/* Cover Image Section */}
            <div className="relative min-h-[150px] w-full pt-[16.28%]">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={formData.coverImagePreview || formData.coverImage}
                  alt="Cover"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <input
                  type="file"
                  id="coverImage"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <label
                  htmlFor="coverImage"
                  className="inline-block h-10 w-10 cursor-pointer rounded-lg bg-white/60 p-1 text-[#ae7aff] hover:bg-white"
                >
                  📷
                </label>
              </div>
            </div>

            {/* Avatar Section */}
            <div className="px-4 pb-4">
              <div className="flex flex-wrap gap-4 pb-4 pt-6">
                <div className="relative -mt-12 inline-block h-28 w-28 overflow-hidden rounded-full border-2">
                  <img
                    src={formData.avatarPreview || formData.avatar}
                    alt="Avatar"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <input
                      type="file"
                      id="avatar"
                      className="hidden"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                    <label
                      htmlFor="avatar"
                      className="inline-block h-8 w-8 cursor-pointer rounded-lg bg-white/60 p-1 text-[#ae7aff] hover:bg-white"
                    >
                      📷
                    </label>
                  </div>
                </div>
                <div className="mr-auto">
                  <h1 className="font-bold text-xl">{formData.fullName}</h1>
                  <p className="text-sm text-gray-400">@{userData?.username}</p>
                </div>
              </div>

              {/* Edit Form */}
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap gap-y-4 py-4">
                  <div className="w-full">
                    <label htmlFor="fullName" className="mb-1 inline-block">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="mb-1 inline-block">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="inline-block rounded-lg border px-3 py-1.5 hover:bg-white/10"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-block bg-[#ae7aff] px-3 py-1.5 text-black disabled:opacity-50"
                  >
                    {loading ? 'Saving...' : 'Save changes'}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Editpersonalinfo;