import React from 'react'

function ChanelVideolist() {
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
                    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 pt-2">
                        <div className="w-full">
                            <div className="relative mb-2 w-full pt-[56%]">
                                <div className="absolute inset-0"><img
                                        src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="JavaScript Fundamentals: Variables and Data Types" className="h-full w-full" />
                                </div><span
                                    className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">20:45</span>
                            </div>
                            <h6 className="mb-1 font-semibold">JavaScript Fundamentals: Variables and Data Types</h6>
                            <p className="flex text-sm text-gray-200">10.3k Views · 44 minutes ago</p>
                        </div>
                        <div className="w-full">
                            <div className="relative mb-2 w-full pt-[56%]">
                                <div className="absolute inset-0"><img
                                        src="https://images.pexels.com/photos/2519817/pexels-photo-2519817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Getting Started with Express.js" className="h-full w-full" /></div><span
                                    className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">22:18</span>
                            </div>
                            <h6 className="mb-1 font-semibold">Getting Started with Express.js</h6>
                            <p className="flex text-sm text-gray-200">11.k Views · 5 hours ago</p>
                        </div>
                        <div className="w-full">
                            <div className="relative mb-2 w-full pt-[56%]">
                                <div className="absolute inset-0"><img
                                        src="https://images.pexels.com/photos/1739849/pexels-photo-1739849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Building a RESTful API with Node.js and Express" className="h-full w-full" />
                                </div><span
                                    className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">24:33</span>
                            </div>
                            <h6 className="mb-1 font-semibold">Building a RESTful API with Node.js and Express</h6>
                            <p className="flex text-sm text-gray-200">14.5k Views · 7 hours ago</p>
                        </div>
                        <div className="w-full">
                            <div className="relative mb-2 w-full pt-[56%]">
                                <div className="absolute inset-0"><img
                                        src="https://images.pexels.com/photos/1739854/pexels-photo-1739854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Introduction to React Native" className="h-full w-full" /></div><span
                                    className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">19:58</span>
                            </div>
                            <h6 className="mb-1 font-semibold">Introduction to React Native</h6>
                            <p className="flex text-sm text-gray-200">10.9k Views · 8 hours ago</p>
                        </div>
                        <div className="w-full">
                            <div className="relative mb-2 w-full pt-[56%]">
                                <div className="absolute inset-0"><img
                                        src="https://images.pexels.com/photos/1144256/pexels-photo-1144256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Creating Custom Hooks in React" className="h-full w-full" /></div><span
                                    className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">16:37</span>
                            </div>
                            <h6 className="mb-1 font-semibold">Creating Custom Hooks in React</h6>
                            <p className="flex text-sm text-gray-200">9.3k Views · 9 hours ago</p>
                        </div>
                        <div className="w-full">
                            <div className="relative mb-2 w-full pt-[56%]">
                                <div className="absolute inset-0"><img
                                        src="https://images.pexels.com/photos/1144260/pexels-photo-1144260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Building Scalable Web Applications with Django" className="h-full w-full" />
                                </div><span
                                    className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">32:18</span>
                            </div>
                            <h6 className="mb-1 font-semibold">Building Scalable Web Applications with Django</h6>
                            <p className="flex text-sm text-gray-200">18.9M Views · 12 hours ago</p>
                        </div>
                        <div className="w-full">
                            <div className="relative mb-2 w-full pt-[56%]">
                                <div className="absolute inset-0"><img
                                        src="https://images.pexels.com/photos/1144276/pexels-photo-1144276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Creating Interactive UIs with React and D3" className="h-full w-full" /></div>
                                <span
                                    className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">29:30</span>
                            </div>
                            <h6 className="mb-1 font-semibold">Creating Interactive UIs with React and D3</h6>
                            <p className="flex text-sm text-gray-200">20.1k Views · 14 hours ago</p>
                        </div>
                        <div className="w-full">
                            <div className="relative mb-2 w-full pt-[56%]">
                                <div className="absolute inset-0"><img
                                        src="https://images.pexels.com/photos/1144274/pexels-photo-1144274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Node.js Authentication with Passport.js" className="h-full w-full" /></div>
                                <span
                                    className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">26:58</span>
                            </div>
                            <h6 className="mb-1 font-semibold">Node.js Authentication with Passport.js</h6>
                            <p className="flex text-sm text-gray-200">21.2k Views · 15 hours ago</p>
                        </div>
                        <div className="w-full">
                            <div className="relative mb-2 w-full pt-[56%]">
                                <div className="absolute inset-0"><img
                                        src="https://images.pexels.com/photos/1144231/pexels-photo-1144231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Data Visualization with Tableau" className="h-full w-full" /></div><span
                                    className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">32:14</span>
                            </div>
                            <h6 className="mb-1 font-semibold">Data Visualization with Tableau</h6>
                            <p className="flex text-sm text-gray-200">24.5k Views · 18 hours ago</p>
                        </div>
                        <div className="w-full">
                            <div className="relative mb-2 w-full pt-[56%]">
                                <div className="absolute inset-0"><img
                                        src="https://images.pexels.com/photos/1144250/pexels-photo-1144250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Building Real-Time Applications with Socket.IO" className="h-full w-full" />
                                </div><span
                                    className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">27:37</span>
                            </div>
                            <h6 className="mb-1 font-semibold">Building Real-Time Applications with Socket.IO</h6>
                            <p className="flex text-sm text-gray-200">25.6k Views · 19 hours ago</p>
                        </div>
                        <div className="w-full">
                            <div className="relative mb-2 w-full pt-[56%]">
                                <div className="absolute inset-0"><img
                                        src="https://images.pexels.com/photos/1115824/pexels-photo-1115824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Advanced CSS: Animations and Transitions" className="h-full w-full" /></div>
                                <span
                                    className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">31:55</span>
                            </div>
                            <h6 className="mb-1 font-semibold">Advanced CSS: Animations and Transitions</h6>
                            <p className="flex text-sm text-gray-200">28.9k Views · 22 hours ago</p>
                        </div>
                        <div className="w-full">
                            <div className="relative mb-2 w-full pt-[56%]">
                                <div className="absolute inset-0"><img
                                        src="https://images.pexels.com/photos/1115808/pexels-photo-1115808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Advanced React Patterns" className="h-full w-full" /></div><span
                                    className="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">30:25</span>
                            </div>
                            <h6 className="mb-1 font-semibold">Advanced React Patterns</h6>
                            <p className="flex text-sm text-gray-200">30.1k Views · 1 day ago</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    </>
  )
}

export default ChanelVideolist
