import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../Components/SideBar';
import { getCurrentUser } from '../API/getCurrentUser';

function MyContent() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { success, user, error } = await getCurrentUser();
        if (success) {
          setUser(user);
        } else {
          setError(error || 'Failed to fetch user data');
        }
      } catch (err) {
        setError('An error occurred while fetching user data');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#121212] text-white flex items-center justify-center min-h-screen">
        <h1 className="text-gray-400">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#121212] text-white flex items-center justify-center min-h-screen">
        <h1 className="text-red-500">Error: {error}</h1>
      </div>
    );
  }

  return (
    <>
      <SideBar />
      <div className="bg-[#121212] text-white">
        <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
          <section className="w-full pl-4 pb-4 sm:pl-6 sm:pb-6 md:pl-8 md:pb-8 lg:pl-12 lg:pb-12 xl:pl-16 xl:pb-16">
            {/* Cover Image */}
            <div className="relative min-h-[150px] w-full pt-[16.28%]">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={user.coverImage}
                  alt="Cover"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="px-4 pb-4">
              <div className="flex flex-wrap gap-4 pb-4 pt-6">
                {/* Avatar */}
                <span className="relative -mt-12 inline-block h-28 w-28 overflow-hidden rounded-full border-2">
                  <img
                    src={user.avatar}
                    alt="Avatar"
                    className="h-full w-full object-cover"
                  />
                </span>

                <div className="mr-auto inline-block">
                  <h1 className="font-bold text-xl">{user.fullName}</h1>
                  <p className="text-sm text-gray-400">@{user.username}</p>
                  <p className="text-sm text-gray-400">
                    {user.subscribersCount} Subscribers
                  </p>
                </div>

                <div className="inline-block">
                  <Link to="/Editpersonalinfo">
                    <button className="group/btn mr-1 flex items-center gap-x-2 bg-[#ae7aff] px-3 py-2 font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 active:translate-x-[5px] active:translate-y-[5px] active:shadow-none sm:w-auto">
                      Edit
                    </button>
                  </Link>
                </div>
              </div>

              {/* Tabs */}
              <ul className="sticky top-[82px] flex gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2">
                <li className="w-full">
                  <button className="w-full border-b-2 border-[#ae7aff] bg-white py-1.5 text-[#ae7aff]">
                    Videos
                  </button>
                </li>
              </ul>

              {/* No Videos */}
              <div className="flex justify-center p-4">
                <div className="max-w-sm text-center">
                  <h5 className="mb-2 font-semibold">No videos uploaded</h5>
                  <Link to="/UploadVideopopup">
                    <button className="mt-4 inline-flex items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-black">
                      New video
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default MyContent;