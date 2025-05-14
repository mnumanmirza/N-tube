import React, { useEffect, useState } from 'react';
import SideBar from '../Components/SideBar';
import { getAllVideos } from '../API/getAllVideos';
import { changeVideoStatus } from '../API/videos/changeVideoStatus';
import { deleteVideo } from '../API/videos/deleteVideo';
import { updateVideo } from '../API/videos/updateVideo';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UnpublishedPlaylist() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [editData, setEditData] = useState({
    _id: '',
    title: '',
    description: '',
    videoFile: null,
    thumbnail: null,
  });
  const [editLoading, setEditLoading] = useState(false);

  useEffect(() => {
    fetchAllVideos(page);
    // eslint-disable-next-line
  }, [page]);

  const fetchAllVideos = async (pageNum = 1) => {
    try {
      setLoading(true);
      const response = await getAllVideos(pageNum, 9);
      const allVideos = response.data.docs;
      setVideos((prev) => pageNum === 1 ? allVideos : [...prev, ...allVideos]);
      setHasMore(pageNum < response.data.totalPages);
    } catch (error) {
      console.error('Error fetching videos:', error);
      toast.error(error.message || 'Failed to fetch videos');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (videoId, isPublished) => {
    try {
      if (!videoId) {
        toast.error('Invalid video ID');
        return;
      }
      const response = await changeVideoStatus(videoId);
      if (response.success) {
        toast.success(isPublished ? 'Video unpublished successfully!' : 'Video published successfully!');
        setVideos((prev) =>
          prev.map((video) =>
            video._id === videoId ? { ...video, isPublished: !isPublished } : video
          )
        );
      } else {
        toast.error(response.message || 'Failed to change video status');
      }
    } catch (error) {
      console.error('Error changing video status:', error);
      toast.error(error.message || 'Failed to change video status');
    }
  };

  const handleEdit = (videoId) => {
    const video = videos.find((v) => v._id === videoId);
    if (video) {
      setEditData({
        _id: video._id,
        title: video.title,
        description: video.description,
        videoFile: null,
        thumbnail: null,
        oldVideoFile: video.videoFile,
        oldThumbnail: video.thumbnail,
      });
      setEditPopup(true);
    }
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditFileChange = (e, type) => {
    const file = e.target.files[0];
    setEditData((prev) => ({
      ...prev,
      [type]: file,
    }));
    if (file) {
      toast.success(`${file.name} is selected for ${type === 'videoFile' ? 'video' : 'thumbnail'}`);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditLoading(true);
    try {
      const { _id, title, description, videoFile, thumbnail } = editData;
      if (!videoFile || !thumbnail) {
        toast.error('Please select both a video file and a thumbnail image');
        setEditLoading(false);
        return;
      }
      const data = new FormData();
      data.append('title', title);
      data.append('description', description);
      data.append('videoFile', videoFile);
      data.append('thumbnail', thumbnail);

      const response = await updateVideo(_id, data);
      if (response.success) {
        toast.success('Video Updated Successfully');
        setVideos((prev) =>
          prev.map((video) =>
            video._id === _id
              ? {
                  ...video,
                  title,
                  description,
                  videoFile: response.data.videoFile,
                  thumbnail: response.data.thumbnail,
                }
              : video
          )
        );
        setEditPopup(false);
      } else {
        toast.error(response.message || 'Failed to update video');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to update video');
    } finally {
      setEditLoading(false);
    }
  };

  const handleDelete = async (videoId) => {
    try {
      if (!videoId) {
        toast.error('Invalid video ID');
        return;
      }
      const response = await deleteVideo(videoId);
      if (response.success) {
        toast.success('Video Deleted Successfully');
        setVideos((prev) => prev.filter((video) => video._id !== videoId));
      } else {
        toast.error(response.message || 'Failed to delete video');
      }
    } catch (error) {
      console.error('Error deleting video:', error);
      toast.error(error.message || 'Failed to delete video');
    }
  };

  return (
    <>
      <SideBar />
      {/* Edit Popup */}
      {editPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <form
            onSubmit={handleEditSubmit}
            className="bg-[#232323] p-6 rounded-lg w-full max-w-md"
            encType="multipart/form-data"
          >
            <h2 className="text-xl font-bold mb-4 text-white">Edit Video</h2>
            <div className="mb-3">
              <label className="block mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={editData.title}
                onChange={handleEditInputChange}
                className="w-full border bg-transparent px-2 py-1 rounded"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Description</label>
              <textarea
                name="description"
                value={editData.description}
                onChange={handleEditInputChange}
                className="w-full border bg-transparent px-2 py-1 rounded"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Video File</label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleEditFileChange(e, 'videoFile')}
                className="w-full border bg-transparent px-2 py-1 rounded"
              />
              {editData.oldVideoFile && !editData.videoFile && (
                <p className="text-xs text-gray-400 mt-1">Current: <a href={editData.oldVideoFile} target="_blank" rel="noopener noreferrer" className="underline">View Video</a></p>
              )}
              {editData.videoFile && (
                <p className="text-xs text-gray-400 mt-1">Selected: {editData.videoFile.name}</p>
              )}
            </div>
            <div className="mb-3">
              <label className="block mb-1">Thumbnail</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleEditFileChange(e, 'thumbnail')}
                className="w-full border bg-transparent px-2 py-1 rounded"
              />
              {editData.oldThumbnail && !editData.thumbnail && (
                <p className="text-xs text-gray-400 mt-1">Current: <img src={editData.oldThumbnail} alt="thumbnail" className="inline h-8" /></p>
              )}
              {editData.thumbnail && (
                <p className="text-xs text-gray-400 mt-1">Selected: {editData.thumbnail.name}</p>
              )}
            </div>
            <div className="flex gap-2 mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
                disabled={editLoading}
              >
                {editLoading ? 'Updating...' : 'Update'}
              </button>
              <button
                type="button"
                className="bg-gray-600 text-white px-4 py-2 rounded"
                onClick={() => setEditPopup(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="bg-[#121212] text-white">
        <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
          <section className="w-full pb-[20px] sm:ml-[70px] pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-16">
            {/* All Videos List */}
            {videos.map((video, index) => (
              <div key={`${video._id}-${index}`} className="w-full max-w-3xl gap-x-4 md:flex mb-6">
                <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
                  <div className="w-full pt-[56%]">
                    <div className="absolute inset-0">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-2 md:w-7/12">
                  <div className="w-full">
                    <div className="flex justify-between items-start">
                      <h6 className="mb-1 font-semibold md:max-w-[75%]">{video.title}</h6>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleStatusChange(video._id, video.isPublished)}
                          className={`px-3 py-1 rounded text-sm ${
                            video.isPublished
                              ? 'bg-green-600 hover:bg-green-700'
                              : 'bg-blue-600 hover:bg-blue-700'
                          }`}
                        >
                          {video.isPublished ? 'Unpublish' : 'Publish'}
                        </button>
                        <button
                          onClick={() => handleEdit(video._id)}
                          className="px-3 py-1 bg-yellow-500 rounded hover:bg-yellow-600 text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(video._id)}
                          className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-200 mt-1">Video ID: {video._id}</p>
                    <p className="text-sm text-gray-200 mt-2">{video.description}</p>
                    <div className="mt-3 flex items-center gap-x-4">
                      <p className="text-sm text-gray-200">Views: {video.views}</p>
                      <p className="text-sm text-gray-200">
                        Status: {video.isPublished ? 'Published' : 'Unpublished'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {videos.length === 0 && !loading && (
              <div className="text-center text-gray-400 mt-8">No videos found</div>
            )}
            {hasMore && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setPage((prev) => prev + 1)}
                  className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 text-sm"
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Load More'}
                </button>
              </div>
            )}
            {loading && page === 1 && <div className="text-white text-center mt-8">Loading...</div>}
          </section>
        </div>
      </div>
    </>
  );
}

export default UnpublishedPlaylist;