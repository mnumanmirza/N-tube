import React from 'react'

function ChanelEmptyTweetpg() {
    return (
        <>
            <div className=" bg-[#121212] text-white">

                <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">

                    <section className="w-full pl-4 pb-4 sm:pl-6 sm:pb-6 md:pl-8 md:pb-8 lg:pl-12 lg:pb-12 xl:pl-16 xl:pb-16">
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
                                <div className="inline-block">
                                    <div className="inline-flex min-w-[145px] justify-end"><button
                                        className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto"><span
                                            className="inline-block w-5"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                                aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z">
                                                </path>
                                            </svg></span><span className="group-focus/btn:hidden">Subscribe</span><span
                                                className="hidden group-focus/btn:block">Subscribed</span></button></div>
                                </div>
                            </div>
                            <ul
                                className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
                                <li className="w-full"><button
                                    className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">Videos</button>
                                </li>
                                <li className="w-full"><button
                                    className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">Playlist</button>
                                </li>
                                <li className="w-full"><button
                                    className="w-full border-b-2 border-[#ae7aff] bg-white px-3 py-1.5 text-[#ae7aff]">Tweets</button>
                                </li>
                                <li className="w-full"><button
                                    className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">Subscribed</button>
                                </li>
                            </ul>
                            <div className="flex justify-center p-4">
                                <div className="w-full max-w-sm text-center">
                                    <p className="mb-3 w-full"><span
                                        className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]"><span
                                            className="inline-block w-6">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                className="w-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                                />
                                            </svg>
                                        </span></span></p>
                                    <h5 className="mb-2 font-semibold">No Tweets</h5>
                                    <p>This channel has yet to make a <strong>Tweet</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default ChanelEmptyTweetpg
