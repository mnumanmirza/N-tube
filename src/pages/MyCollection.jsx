import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../Components/SideBar";

function MyCollection() {
  return (
    <>
      <SideBar />
      <div className="bg-[#121212] text-white">
        <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
          <section className="w-full pl-4 pb-4 sm:pl-6 sm:pb-6 md:pl-8 md:pb-8 lg:pl-12 lg:pb-12 xl:pl-16 xl:pb-16">
            <div className="relative min-h-[150px] w-full pt-[16.28%]">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1092424/pexels-photo-1092424.jpeg?auto=compress"
                  alt="cover-photo"
                />
              </div>
            </div>
            <div className="px-4 pb-4">
              <div className="flex flex-wrap gap-4 pb-4 pt-6">
                <span className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
                  <img
                    src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Channel"
                    className="h-full w-full"
                  />
                </span>
                <div className="mr-auto inline-block">
                  <h1 className="font-bolg text-xl">React Patterns</h1>
                  <p className="text-sm text-gray-400">@reactpatterns</p>
                  <p className="text-sm text-gray-400">600k Subscribers · 220 Subscribed</p>
                </div>
                <div className="inline-block">
                  <div className="inline-flex min-w-[145px] justify-end">
                    <button className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                      <span className="inline-block w-5">
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
                            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                          ></path>
                        </svg>
                      </span>
                      <span className="group-focus/btn:hidden">Subscribe</span>
                      <span className="hidden group-focus/btn:block">Subscribed</span>
                    </button>
                  </div>
                </div>
              </div>
              <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
                <li className="w-full">
                  <button className="w-full border-b-2 border-[#ae7aff] bg-white px-3 py-1.5 text-[#ae7aff]">
                    Playlist
                  </button>
                </li>
              </ul>
              <div className="grid gap-4 pt-2 sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">
                {/* Unpublished Playlist Box */}
                <Link to="/unpublished-playlist" className="w-full">
                  <div className="relative mb-2 w-full pt-[56%]">
                    <div className="absolute inset-0">
                      <img
                        src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Unpublished Playlist"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0">
                        <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                          <div className="relative z-[1]">
                            <p className="flex justify-between">
                              <span className="inline-block">Unpublished Playlist</span>
                              <span className="inline-block">6 videos</span>
                            </p>
                            <p className="text-sm text-gray-200">Click to view unpublished videos</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 className="mb-1 font-semibold">Unpublished Playlist</h6>
                  <p className="flex text-sm text-gray-200">
                    Manage and publish your unpublished videos.
                  </p>
                </Link>

                {/* Other Playlist Boxes */}
                <div className="w-full">
                  <div className="relative mb-2 w-full pt-[56%]">
                    <div className="absolute inset-0">
                      <img
                        src="https://images.pexels.com/photos/2519817/pexels-photo-2519817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="JavaScript Fundamentals"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <h6 className="mb-1 font-semibold">JavaScript Fundamentals</h6>
                  <p className="flex text-sm text-gray-200">
                    Learn the core concepts and fundamentals of JavaScript programming language.
                  </p>
                </div>
                <div className="w-full">
                  <div className="relative mb-2 w-full pt-[56%]">
                    <div className="absolute inset-0">
                      <img
                        src="https://images.pexels.com/photos/1739849/pexels-photo-1739849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="TypeScript Essentials"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0">
                        <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                          <div className="relative z-[1]">
                            <p className="flex justify-between">
                              <span className="inline-block">Playlist</span>
                              <span className="inline-block">2 videos</span>
                            </p>
                            <p className="text-sm text-gray-200">90K Views · 4 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 className="mb-1 font-semibold">TypeScript Essentials</h6>
                  <p className="flex text-sm text-gray-200">
                    Dive into TypeScript for enhanced type safety and scalable JavaScript applications.
                  </p>
                </div>
                <div className="w-full">
                  <div className="relative mb-2 w-full pt-[56%]">
                    <div className="absolute inset-0">
                      <img
                        src="https://images.pexels.com/photos/1144256/pexels-photo-1144256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="React State Management"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0">
                        <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                          <div className="relative z-[1]">
                            <p className="flex justify-between">
                              <span className="inline-block">Playlist</span>
                              <span className="inline-block">1 videos</span>
                            </p>
                            <p className="text-sm text-gray-200">80K Views · 5 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 className="mb-1 font-semibold">React State Management</h6>
                  <p className="flex text-sm text-gray-200">
                    Explore various state management techniques in React applications.
                  </p>
                </div>
                <div className="w-full">
                  <div className="relative mb-2 w-full pt-[56%]">
                    <div className="absolute inset-0">
                      <img
                        src="https://images.pexels.com/photos/1144260/pexels-photo-1144260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Advanced JavaScript Techniques"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0">
                        <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                          <div className="relative z-[1]">
                            <p className="flex justify-between">
                              <span className="inline-block">Playlist</span>
                              <span className="inline-block">2 videos</span>
                            </p>
                            <p className="text-sm text-gray-200">110K Views · 6 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 className="mb-1 font-semibold">Advanced JavaScript Techniques</h6>
                  <p className="flex text-sm text-gray-200">
                    Delve into advanced JavaScript concepts and techniques for professional-level programming.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default MyCollection;