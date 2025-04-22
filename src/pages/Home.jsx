import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllVideos } from '../API/getAllVideos';
import SideBar from '../Components/SideBar';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchVideos = async () => {
    try {
      const res = await getAllVideos();
      setVideos(res.data.docs);
    } catch (error) {
      console.error('Error fetching videos:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (loading) return <div className="text-center mt-10 text-lg">Loading videos...</div>;

  return (
    <>
      <SideBar />
      <div className="bg-[#121212] text-white p-4 sm:pl-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video._id}
            className="bg-gray-800 shadow-lg rounded-2xl overflow-hidden transition duration-300 hover:shadow-2xl cursor-pointer"
            onClick={() => navigate(`/watch/${video._id}`)} // Correct route
          >
            <img
              src={video.thumbnail || 'https://via.placeholder.com/300'}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-1">{video.title}</h3>
              <p className="text-sm text-gray-300">
                {video.description ? video.description.slice(0, 100) + '...' : 'No description'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
