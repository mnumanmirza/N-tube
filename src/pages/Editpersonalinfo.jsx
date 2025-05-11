import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Corrected typo here
import { updateAccountDetail } from '../API/users/updateAccountDetail';
import { updateCoverImage } from '../API/users/updateCoverImage';
import { updateUserAvatar } from '../API/users/updateUserAvatar';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from '../Components/SideBar';

const EditProfile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    fullName: '',
    avatar: '',
    coverImage: '',
  });
  const [loading, setLoading] = useState(false);
  const [coverLoading, setCoverLoading] = useState(false);
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
      setFormData({
        fullName: data?.user?.fullName || '',
        avatar: data?.user?.avatar || '',
        coverImage: data?.user?.coverImage || '',
      });
    } catch (error) {
      toast.error('Failed to load user data');
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleFileChange = async (e) => {
    const { id, files } = e.target;
    if (files[0]) {
      try {
        if (id === 'avatar') {
          setLoading(true);
          console.log('Uploading avatar:', files[0]);

          const response = await updateUserAvatar(files[0]);

          console.log('Response from updateUserAvatar:', response);

          if (response?.data?.avatar) {
            setFormData((prev) => ({
              ...prev,
              avatar: response.data.avatar,
              avatarPreview: URL.createObjectURL(files[0]),
            }));
            toast.success('Avatar updated successfully!');
          } else {
            throw new Error('Failed to update avatar');
          }
        } else if (id === 'coverImage') {
          setCoverLoading(true);
          console.log('Uploading cover image:', files[0]);

          const response = await updateCoverImage(files[0]);

          console.log('Response from updateCoverImage:', response);

          if (response?.data?.coverImage) {
            setFormData((prev) => ({
              ...prev,
              coverImage: response.data.coverImage,
              coverImagePreview: URL.createObjectURL(files[0]),
            }));
            toast.success('Cover image updated successfully!');
          } else {
            throw new Error('Failed to update cover image');
          }
        }
      } catch (error) {
        console.error(`${id === 'avatar' ? 'Avatar' : 'Cover Image'} Update Error:`, error);
        toast.error(error.message || 'Update failed');
      } finally {
        if (id === 'avatar') setLoading(false);
        if (id === 'coverImage') setCoverLoading(false);
      }
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);

    console.log('Submitting form data:', Object.fromEntries(formDataToSend.entries()));

    const response = await updateAccountDetail(formDataToSend);

    console.log('Response from updateAccountDetail:', response);

    if (response.success) {
      toast.success('Profile details updated successfully!');
      fetchUserData(); // Refresh user data after successful update
    } else {
      throw new Error(response.message || 'Failed to update profile');
    }
  } catch (error) {
    console.error('Error during profile update:', error);
    toast.error(error.message || 'Update failed');
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)] bg-[#121212]">
        <aside className="pl-14">
          <SideBar />
        </aside>

        <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0 bg-[#121212] text-white ">
          <div className="relative min-h-[150px] w-full pt-[16.28%]">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={
                  formData.coverImagePreview ||
                  formData.coverImage ||
                  'https://images.pexels.com/photos/1092424/pexels-photo-1092424.jpeg?auto=compress'
                }
                alt="cover"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <input
                type="file"
                id="coverImage"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
                disabled={coverLoading}
              />
              <label
                htmlFor="coverImage"
                className={`inline-block h-10 w-10 cursor-pointer rounded-lg bg-white/60 p-1 text-[#ae7aff] hover:bg-white ${
                  coverLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                📷
              </label>
            </div>
          </div>

          <div className="px-4 pb-4">
            <div className="flex flex-wrap gap-4 pb-4 pt-6">
              <div className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
                <img
                  src={
                    formData.avatarPreview ||
                    formData.avatar ||
                    'https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  }
                  alt="avatar"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <input
                    type="file"
                    id="avatar"
                    className="hidden"
                    onChange={handleFileChange}
                    accept="image/*"
                    disabled={loading}
                  />
                  <label
                    htmlFor="avatar"
                    className={`inline-block h-8 w-8 cursor-pointer rounded-lg bg-white/60 p-1 text-[#ae7aff] hover:bg-white ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    📷
                  </label>
                </div>
              </div>

              <div className="mr-auto inline-block">
                <h1 className="text-xl font-bold">{formData.fullName}</h1>
                <p className="text-sm text-gray-400">@username</p>
              </div>
            </div>

            <ul className="no-scrollbar sticky top-[66px] z-[2] flex gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
              {['Personal Information', 'Channel Information', 'Change Password'].map((tab) => (
                <li key={tab} className="w-full">
                  <button
                    className={`w-full border-b-2 px-3 py-1.5 ${
                      activeTab === tab.toLowerCase().replace(' ', '-')
                        ? 'border-[#ae7aff] bg-white text-[#ae7aff]'
                        : 'border-transparent text-gray-400'
                    }`}
                    onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap justify-center gap-y-4 py-4">
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <h5 className="font-semibold">Personal Info</h5>
                <p className="text-gray-300">Update your photo and personal details.</p>
              </div>

              <div className="w-full sm:w-1/2 lg:w-2/3">
                <form onSubmit={handleSubmit} className="rounded-lg border">
                  <div className="flex flex-wrap gap-y-4 p-4">
                    <div className="w-full">
                      <label htmlFor="fullName" className="mb-1 inline-block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border bg-transparent px-2 py-1.5"
                        placeholder="Enter full name"
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <hr className="border border-gray-300" />
                  <div className="flex items-center justify-end gap-4 p-4">
                    <button
                      type="button"
                      onClick={() => navigate(-1)}
                      className="rounded-lg border px-3 py-1.5 hover:bg-white/10"
                      disabled={loading}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-[#ae7aff] px-3 py-1.5 text-black disabled:opacity-50"
                    >
                      {loading ? 'Saving...' : 'Save changes'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditProfile;