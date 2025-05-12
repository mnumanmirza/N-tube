import React, { useEffect, useState } from 'react';
import SideBar from '../Components/SideBar';
import { getUnpublishedVideos } from '../API/videos/getUnpublishedVideos';
import { changeVideoStatus } from '../API/videos/changeVideoStatus';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UnpublishedPlaylist() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [manualVideoId, setManualVideoId] = useState(''); // State for manual videoId input

  useEffect(() => {
    fetchUnpublishedVideos(page);
  }, [page]);

  const fetchUnpublishedVideos = async (pageNum = 1) => {
    try {
      setLoading(true);
      const response = await getUnpublishedVideos(pageNum, 6);
      const unpublishedVideos = response.data.docs.filter((video) => video.isPublished === false);
      setVideos((prev) => [...prev, ...unpublishedVideos]);
      setHasMore(pageNum < response.data.totalPages);
    } catch (error) {
      console.error('Error fetching unpublished videos:', error);
      toast.error(error.message || 'Failed to fetch videos');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (videoId) => {
    try {
      if (!videoId) {
        toast.error('Invalid video ID');
        return;
      }

      console.log('Publishing video with ID:', videoId); // Debugging log
      const response = await changeVideoStatus(videoId);
      console.log('API Response:', response); // Debugging log

      if (response.success) {
        toast.success('Video published successfully!');
        setVideos((prev) => prev.filter((video) => video._id !== videoId));
      } else {
        toast.error(response.message || 'Failed to publish video');
      }
    } catch (error) {
      console.error('Error publishing video:', error);
      toast.error(error.message || 'Failed to publish video');
    }
  };

  const handleManualPublish = async (e) => {
    e.preventDefault();
    if (!manualVideoId) {
      toast.error('Please enter a video ID');
      return;
    }
    await handleStatusChange(manualVideoId);
    setManualVideoId(''); // Clear the input field
  };

  return (
    <>
      <SideBar />
      <div className="bg-[#121212] text-white">
        <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
          <section className="w-full pb-[20px] sm:ml-[70px] pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-16">
            {/* Manual Video ID Input */}
            <form onSubmit={handleManualPublish} className="mb-6">
              <label htmlFor="videoId" className="block text-sm text-gray-300 mb-2">
                Enter Video ID to Publish:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="videoId"
                  value={manualVideoId}
                  onChange={(e) => setManualVideoId(e.target.value)}
                  className="px-3 py-2 rounded bg-gray-800 text-white w-full"
                  placeholder="Enter video ID"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-sm"
                >
                  Publish
                </button>
              </div>
            </form>

            {/* Unpublished Videos List */}
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
                      <button
                        onClick={() => handleStatusChange(video._id)}
                        className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 text-sm"
                      >
                        Publish
                      </button>
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
              <div className="text-center text-gray-400 mt-8">No unpublished videos found</div>
            )}
            {hasMore && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setPage((prev) => prev + 1)}
                  className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 text-sm"
                >
                  Load More
                </button>
              </div>
            )}
            {loading && <div className="text-white text-center mt-8">Loading...</div>}
          </section>
        </div>
      </div>
    </>
  );
}

export default UnpublishedPlaylist;