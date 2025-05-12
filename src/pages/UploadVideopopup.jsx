import React, { useState } from 'react';
import { addVideo } from '../API/videos/addVideo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function UploadVideopopup() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    videoFile: null,
    thumbnail: null,
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, [type]: file }));
      toast.success(`${file.name} is selected for ${type === 'videoFile' ? 'video' : 'thumbnail'}`);
      console.log(`File selected for ${type}:`, file); // Debugging log
    } else {
      toast.error(`No file selected for ${type === 'videoFile' ? 'video' : 'thumbnail'}`);
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

    try {
      setLoading(true);
      const response = await addVideo(data);
      if (response.success) {
        toast.success('Video uploaded successfully!');
        setFormData({
          title: '',
          description: '',
          videoFile: null,
          thumbnail: null,
        });
      } else {
        toast.error(response.message || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload Error:', error);
      if (error.message === 'Unauthorized Access') {
        toast.error('Session expired. Please log in again.');
        window.location.href = '/login'; // Redirect to login page
      } else {
        toast.error(error.message || 'Upload failed');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#121212] text-white">
      <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
        <section className="relative w-full pl-[105px] pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
          <div className="relative min-h-[150px] w-full pt-[16.28%]">
            <div className="absolute inset-0 overflow-hidden"><img
                src="https://images.pexels.com/photos/1092424/pexels-photo-1092424.jpeg?auto=compress"
                alt="cover-photo" /></div>
          </div>
          <div className="px-4 pb-4">
            <div className="flex flex-wrap gap-4 pb-4 pt-6"><span
                className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2"><img
                    src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Channel" className="h-full w-full" /></span>
              <div className="mr-auto inline-block">
                <h1 className="font-bolg text-xl">React Patterns</h1>
                <p className="text-sm text-gray-400">@reactpatterns</p>
                <p className="text-sm text-gray-400">600k Subscribers · 220 Subscribed</p>
              </div>
              <div className="inline-block"><button
                  className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto"><span
                      className="inline-block w-5">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          aria-hidden="true"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                          />
                      </svg>
                  </span>Edit</button></div>
            </div>
            <ul
                className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
              <li className="w-full"><button
                  className="w-full border-b-2 border-[#ae7aff] bg-white px-3 py-1.5 text-[#ae7aff]">Videos</button>
              </li>
              <li className="w-full"><button
                  className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">Playlist</button>
              </li>
              <li className="w-full"><button
                  className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">Tweets</button>
              </li>
              <li className="w-full"><button
                  className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">Subscribed</button>
              </li>
            </ul>
            <div className="flex justify-center p-4">
              <div className="w-full max-w-sm text-center">
                <p className="mb-3 w-full"><span
                    className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                        />
                    </svg>
                </span></p>
                <h5 className="mb-2 font-semibold">No videos uploaded</h5>
                <p>This page has yet to upload a video. Search another page in order to find more videos.
                </p>
                <button
                    className="mt-4 inline-flex items-center gap-x-2 bg-[#ae7aff] px-3 py-2 font-semibold text-black">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                    New video
                    </button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-10 bg-black/50 px-4 pb-[86px] pt-4 sm:px-14 sm:py-8">
            <div className="h-full overflow-auto border bg-[#121212]">
              <div className="flex items-center justify-between border-b p-4">
                <h2 className="text-xl font-semibold">Upload Videos</h2>
                <button
                  onClick={handleSubmit}
                  className="group/btn mr-1 flex w-auto items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                  disabled={loading}
                >
                  {loading ? 'Uploading...' : 'Save'}
                </button>
              </div>
              <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-4 p-4">
                <div className="w-full border-2 border-dashed px-4 py-12 text-center">
                  <h6 className="mb-2 font-semibold">Drag and drop video files to upload</h6>
                  <p className="text-gray-400">Your videos will be private until you publish them.</p>
                  <label
                    htmlFor="upload-video"
                    className="group/btn mt-4 inline-flex w-auto cursor-pointer items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                  >
                    <input
                      type="file"
                      id="upload-video"
                      className="sr-only"
                      onChange={(e) => handleFileChange(e, 'videoFile')}
                    />
                    Select Video
                  </label>
                  {formData.videoFile && (
                    <p className="mt-2 text-sm text-gray-400">Selected Video: {formData.videoFile.name}</p>
                  )}
                </div>
                <div className="w-full">
                  <label htmlFor="thumbnail" className="mb-1 inline-block">
                    Thumbnail<sup>*</sup>
                  </label>
                  <input
                    id="thumbnail"
                    type="file"
                    className="w-full border p-1 file:mr-4 file:border-none file:bg-[#ae7aff] file:px-3 file:py-1.5"
                    onChange={(e) => handleFileChange(e, 'thumbnail')}
                  />
                  {formData.thumbnail && (
                    <p className="mt-2 text-sm text-gray-400">Selected Thumbnail: {formData.thumbnail.name}</p>
                  )}
                </div>
                <div className="w-full">
                  <label htmlFor="title" className="mb-1 inline-block">
                    Title<sup>*</sup>
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full border bg-transparent px-2 py-1 outline-none"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="desc" className="mb-1 inline-block">
                    Description<sup>*</sup>
                  </label>
                  <textarea
                    id="desc"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="h-40 w-full resize-none border bg-transparent px-2 py-1 outline-none"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UploadVideopopup;
