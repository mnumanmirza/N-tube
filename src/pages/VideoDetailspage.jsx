import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllVideos } from '../API/getAllVideos';

const VideoDetailpage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const res = await getAllVideos();
        const allVideos = res.data.docs;
        const current = allVideos.find((v) => v._id === id);
        const suggested = allVideos.filter((v) => v._id !== id);

        setVideo(current);
        setSuggestedVideos(suggested);
        setLikes(current?.likes || 0);
        setDislikes(current?.dislikes || 0);
        setComments(current?.comments || []);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideoData();
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      text: newComment,
      user: {
        name: "Current User",
        avatar: "https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-woman-reading-book-on-a-bench.jpeg"
      },
      timestamp: new Date().toLocaleDateString(),
      timeAgo: "Just now"
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  if (!video) return <div className="p-4 text-white">Loading video...</div>;

  if (!video.videoFile) {
    return <div className="p-4 text-white">Video URL is missing or invalid. Please try again later.</div>;
  }

  return (
    <>
      {/* Preload images */}
      <link rel="preload" as="image" href="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      
      <div className="bg-[#121212] text-white">
        <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
          <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0">
            <div className="flex w-full flex-wrap gap-4 p-4 lg:flex-nowrap">
              <div className="col-span-12 w-full">
                {/* Video Player */}
                <div className="relative mb-4 w-full pt-[56%]">
                  <div className="absolute inset-0">
                    <video className="h-full w-full" controls autoPlay muted>
                      <source src={video.videoFile} type="video/mp4" />
                      <track
                        src={video.captions || ''}
                        kind="subtitles"
                        srcLang="en"
                        label="English"
                        default
                      />
                    </video>
                  </div>
                </div>

                {/* Video Details */}
                <div className="group mb-4 w-full rounded-lg border p-4 duration-200 hover:bg-white/5">
                  <div className="flex flex-wrap gap-y-2">
                    <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
                      <h1 className="text-lg font-bold">{video.title}</h1>
                      <p className="flex text-sm text-gray-200">
                        {video.views} Views · {video.uploadDate}
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-full xl:w-1/2">
                      <div className="flex items-center justify-between gap-x-4 md:justify-end lg:justify-between xl:justify-end">
                        <div className="flex overflow-hidden rounded-lg border">
                          <button 
                            className="group/btn flex items-center gap-x-2 border-r border-gray-700 px-4 py-1.5 hover:bg-white/10"
                            onClick={() => setLikes(l => l + 1)}
                          >
                            <span className="inline-block w-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                                />
                              </svg>
                            </span>
                            {likes}
                          </button>
                          <button 
                            className="group/btn flex items-center gap-x-2 px-4 py-1.5 hover:bg-white/10"
                            onClick={() => setDislikes(d => d + 1)}
                          >
                            <span className="inline-block w-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                                />
                              </svg>
                            </span>
                            {dislikes}
                          </button>
                        </div>
                        {/* Save Button */}
                        <button className="flex items-center gap-x-2 rounded-lg bg-white px-4 py-1.5 text-black">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                            />
                          </svg>
                          Save
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Channel Info */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <div className="h-12 w-12 shrink-0">
                        <img
                          src={video.channel?.avatar || "https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                          alt="channel"
                          className="h-full w-full rounded-full"
                        />
                      </div>
                      <div className="block">
                        <p className="text-gray-200">{video.channel?.name || "React Patterns"}</p>
                        <p className="text-sm text-gray-400">{video.channel?.subscribers || "757K"} Subscribers</p>
                      </div>
                    </div>
                    <button 
                      className={`px-3 py-2 font-bold shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] ${
                        isSubscribed ? 'bg-gray-600 text-white' : 'bg-[#ae7aff] text-black'
                      }`}
                      onClick={() => setIsSubscribed(!isSubscribed)}
                    >
                      {isSubscribed ? 'Subscribed' : 'Subscribe'}
                    </button>
                  </div>

                  {/* Description */}
                  <hr className="my-4 border-white" />
                  <div className="h-5 overflow-hidden group-focus:h-auto">
                    <p className="text-sm">{video.description}</p>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="rounded-lg border bg-[#121212] p-4">
                  <div className="block">
                    <h6 className="mb-4 font-semibold">{comments.length} Comments</h6>
                    <form onSubmit={handleCommentSubmit}>
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full rounded-lg border bg-transparent px-2 py-1 placeholder-white mb-4"
                        placeholder="Add a Comment"
                      />
                      <button
                        type="submit"
                        className="bg-[#ae7aff] text-black px-4 py-2 rounded-lg font-bold hover:bg-[#9b6fe6] transition-colors"
                      >
                        Post Comment
                      </button>
                    </form>
                  </div>
                  <hr className="my-4 border-white" />
                  
                  {/* Comment List */}
                  {comments.map((comment) => (
                    <div key={comment.id}>
                      <div className="flex gap-x-4">
                        <div className="h-11 w-11 shrink-0">
                          <img
                            src={comment.user.avatar}
                            alt="user"
                            className="h-full w-full rounded-full"
                          />
                        </div>
                        <div className="block">
                          <p className="text-gray-200">
                            {comment.user.name} · <span className="text-sm">{comment.timeAgo}</span>
                          </p>
                          <p className="mt-3 text-sm">{comment.text}</p>
                        </div>
                      </div>
                      <hr className="my-4 border-white" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Videos */}
              <div className="col-span-12 flex w-full shrink-0 flex-col gap-3 lg:w-[350px] xl:w-[400px]">
                {suggestedVideos.map((vid) => (
                  <div 
                    key={vid._id} 
                    className="w-full gap-x-2 border pr-2 md:flex cursor-pointer"
                    onClick={() => window.location.href = `/watch/${vid._id}`}
                  >
                    <div className="relative mb-2 w-full md:mb-0 md:w-5/12">
                      <div className="w-full pt-[56%]">
                        <div className="absolute inset-0">
                          <img 
                            src={vid.thumbnail} 
                            alt={vid.title} 
                            className="h-full w-full object-cover" 
                          />
                          <span className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">
                            {vid.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-x-2 px-2 pb-4 pt-1 md:w-7/12 md:px-0 md:py-0.5">
                      <div className="w-full pt-1 md:pt-0">
                        <h6 className="mb-1 text-sm font-semibold">{vid.title}</h6>
                        <p className="mb-0.5 mt-2 text-sm text-gray-200">{vid.channel?.name}</p>
                        <p className="flex text-sm text-gray-200">
                          {vid.views} Views · {vid.uploadDate}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default VideoDetailpage;