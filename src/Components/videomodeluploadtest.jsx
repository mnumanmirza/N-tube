import React, { useState, useRef } from 'react';
import { addVideo } from '../API/videos/addVideo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UploadingVideoPopup() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoFile: null,
    thumbnail: null,
  });
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);
  const thumbnailInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    console.log(`File selected for ${type}:`, file); // Debugging log
    if (file) {
      if (type === 'video') {
        setFormData((prev) => ({ ...prev, videoFile: file }));
        console.log('Updated formData:', { ...formData, videoFile: file }); // Debugging log
      } else if (type === 'thumbnail') {
        setFormData((prev) => ({ ...prev, thumbnail: file }));
        console.log('Updated formData:', { ...formData, thumbnail: file }); // Debugging log
      }
    } else {
      console.warn(`No file selected for ${type}`); // Debugging log
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.videoFile || !formData.thumbnail) {
      toast.error('Please select both a video file and a thumbnail image');
      return;
    }

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('videoFile', formData.videoFile);
    data.append('thumbnail', formData.thumbnail);

    console.log('FormData before submission:', Object.fromEntries(data.entries())); // Debugging log

    try {
      setLoading(true);

      const config = {
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percent);
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      };

      const response = await addVideo(data, config);
      console.log('API Response:', response); // Debugging log
      if (response.success) {
        toast.success('Video uploaded successfully!');
        setShowModal(false);
        resetForm();
      } else {
        toast.error(response.message || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload Error:', error); // Debugging log
      toast.error(error.message || 'Upload failed');
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      videoFile: null,
      thumbnail: null,
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (thumbnailInputRef.current) thumbnailInputRef.current.value = '';
  };

  return (
    <div className="bg-[#121212] text-white">
      <button
        onClick={() => setShowModal(true)}
        className="mt-4 inline-flex items-center gap-x-2 bg-[#ae7aff] px-3 py-2 font-semibold text-black hover:bg-[#9d6de5] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Upload Video
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-lg border border-gray-700 bg-[#1E1E1E] p-6 mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#ae7aff]">Upload Video</h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  resetForm();
                }}
                className="text-gray-400 hover:text-white text-2xl transition-colors"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full bg-[#121212] rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#ae7aff] outline-none"
                  placeholder="Enter video title"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full bg-[#121212] rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-[#ae7aff] outline-none"
                  rows="3"
                  placeholder="Enter video description"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="videoFile" className="block text-sm font-medium mb-2">
                    Video File
                  </label>
                  <input
                    type="file"
                    name="videoFile"
                    ref={fileInputRef}
                    accept="video/*"
                    onChange={(e) => handleFileChange(e, 'video')}
                    className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#ae7aff] file:text-black hover:file:bg-[#9d6de5]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="thumbnail" className="block text-sm font-medium mb-2">
                    Thumbnail
                  </label>
                  <input
                    type="file"
                    name="thumbnail"
                    ref={thumbnailInputRef}
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 'thumbnail')}
                    className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#ae7aff] file:text-black hover:file:bg-[#9d6de5]"
                    required
                  />
                </div>
              </div>

              {loading && (
                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2.5 w-full bg-gray-700 rounded-full">
                      <div
                        className="h-2.5 bg-[#ae7aff] rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-[#ae7aff]">{progress}%</span>
                  </div>
                  <p className="text-sm text-[#ae7aff]">Uploading... Please wait</p>
                </div>
              )}

              <div className="flex justify-end gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                  className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#ae7aff] text-black rounded-lg hover:bg-[#9d6de5] disabled:opacity-50 transition-colors"
                  disabled={loading}
                >
                  {loading ? 'Uploading...' : 'Upload'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadingVideoPopup;