import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../Components/SideBar"; // Corrected import path

function Subscribers() {
    return (
        <>
            <SideBar />
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
                                            className="inline-block w-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                                />
                                            </svg>
                                        </span><span className="group-focus/btn:hidden">Subscribe</span><span
                                            className="hidden group-focus/btn:block">Subscribed</span></button></div>
                                </div>
                            </div>
                            <ul
                                className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
                                <li className="w-full"><button
                                    className="w-full border-b-2 border-[#ae7aff] bg-white px-3 py-1.5 text-[#ae7aff]">Subscribed</button>
                                </li>
                            </ul>
                            <div className="flex flex-col gap-y-4 py-4">
                                <div className="relative mb-2 rounded-lg bg-white py-2 pl-8 pr-3 text-black"><span
                                    className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                        />
                                    </svg>
                                </span><input className="w-full bg-transparent outline-none" placeholder="Search" />
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Code Master" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">Code Master</h6>
                                            <p className="text-sm text-gray-300">20K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white"><span
                                            className="group-focus/btn:hidden">Subscribed</span><span
                                                className="hidden group-focus/btn:inline">Subscribe</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="React Ninja" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">React Ninja</h6>
                                            <p className="text-sm text-gray-300">40K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]"><span
                                            className="group-focus/btn:hidden">Subscribe</span><span
                                                className="hidden group-focus/btn:inline">Subscribed</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/3532549/pexels-photo-3532549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Async Masters" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">Async Masters</h6>
                                            <p className="text-sm text-gray-300">60K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white"><span
                                            className="group-focus/btn:hidden">Subscribed</span><span
                                                className="hidden group-focus/btn:inline">Subscribe</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/2522659/pexels-photo-2522659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Code Crafters" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">Code Crafters</h6>
                                            <p className="text-sm text-gray-300">80K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]"><span
                                            className="group-focus/btn:hidden">Subscribe</span><span
                                                className="hidden group-focus/btn:inline">Subscribed</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/2519823/pexels-photo-2519823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Tailwind Pro" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">Tailwind Pro</h6>
                                            <p className="text-sm text-gray-300">100K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white"><span
                                            className="group-focus/btn:hidden">Subscribed</span><span
                                                className="hidden group-focus/btn:inline">Subscribe</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Express Learner" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">Express Learner</h6>
                                            <p className="text-sm text-gray-300">120K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]"><span
                                            className="group-focus/btn:hidden">Subscribe</span><span
                                                className="hidden group-focus/btn:inline">Subscribed</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Redux Master" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">Redux Master</h6>
                                            <p className="text-sm text-gray-300">140K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white"><span
                                            className="group-focus/btn:hidden">Subscribed</span><span
                                                className="hidden group-focus/btn:inline">Subscribe</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="API Builder" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">API Builder</h6>
                                            <p className="text-sm text-gray-300">160K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]"><span
                                            className="group-focus/btn:hidden">Subscribe</span><span
                                                className="hidden group-focus/btn:inline">Subscribed</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/1739856/pexels-photo-1739856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="React Native Dev" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">React Native Dev</h6>
                                            <p className="text-sm text-gray-300">180K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white"><span
                                            className="group-focus/btn:hidden">Subscribed</span><span
                                                className="hidden group-focus/btn:inline">Subscribe</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/1144257/pexels-photo-1144257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Hook Master" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">Hook Master</h6>
                                            <p className="text-sm text-gray-300">200K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]"><span
                                            className="group-focus/btn:hidden">Subscribe</span><span
                                                className="hidden group-focus/btn:inline">Subscribed</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/1144261/pexels-photo-1144261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="CSS Wizard" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">CSS Wizard</h6>
                                            <p className="text-sm text-gray-300">220K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white"><span
                                            className="group-focus/btn:hidden">Subscribed</span><span
                                                className="hidden group-focus/btn:inline">Subscribe</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/1144268/pexels-photo-1144268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Pythonista" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">Pythonista</h6>
                                            <p className="text-sm text-gray-300">240K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]"><span
                                            className="group-focus/btn:hidden">Subscribe</span><span
                                                className="hidden group-focus/btn:inline">Subscribed</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/1144269/pexels-photo-1144269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Django Master" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">Django Master</h6>
                                            <p className="text-sm text-gray-300">260K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white"><span
                                            className="group-focus/btn:hidden">Subscribed</span><span
                                                className="hidden group-focus/btn:inline">Subscribe</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="ML Geek" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">ML Geek</h6>
                                            <p className="text-sm text-gray-300">280K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]"><span
                                            className="group-focus/btn:hidden">Subscribe</span><span
                                                className="hidden group-focus/btn:inline">Subscribed</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/1144277/pexels-photo-1144277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="ReactD3" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">ReactD3</h6>
                                            <p className="text-sm text-gray-300">300K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white"><span
                                            className="group-focus/btn:hidden">Subscribed</span><span
                                                className="hidden group-focus/btn:inline">Subscribe</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/1144270/pexels-photo-1144270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Passport Pro" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">Passport Pro</h6>
                                            <p className="text-sm text-gray-300">320K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]"><span
                                            className="group-focus/btn:hidden">Subscribe</span><span
                                                className="hidden group-focus/btn:inline">Subscribed</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/1144235/pexels-photo-1144235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Django Rest API" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">Django Rest API</h6>
                                            <p className="text-sm text-gray-300">340K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white"><span
                                            className="group-focus/btn:hidden">Subscribed</span><span
                                                className="hidden group-focus/btn:inline">Subscribe</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/1144232/pexels-photo-1144232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="JS Ninja" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">JS Ninja</h6>
                                            <p className="text-sm text-gray-300">360K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]"><span
                                            className="group-focus/btn:hidden">Subscribe</span><span
                                                className="hidden group-focus/btn:inline">Subscribed</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Tableau Master" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">Tableau Master</h6>
                                            <p className="text-sm text-gray-300">380K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white"><span
                                            className="group-focus/btn:hidden">Subscribed</span><span
                                                className="hidden group-focus/btn:inline">Subscribe</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="Socket.IO Expert" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">Socket.IO Expert</h6>
                                            <p className="text-sm text-gray-300">400K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]"><span
                                            className="group-focus/btn:hidden">Subscribe</span><span
                                                className="hidden group-focus/btn:inline">Subscribed</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="GraphQL Pro" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">GraphQL Pro</h6>
                                            <p className="text-sm text-gray-300">420K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white"><span
                                            className="group-focus/btn:hidden">Subscribed</span><span
                                                className="hidden group-focus/btn:inline">Subscribe</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/1115822/pexels-photo-1115822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="MERN Stack" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">MERN Stack</h6>
                                            <p className="text-sm text-gray-300">440K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]"><span
                                            className="group-focus/btn:hidden">Subscribe</span><span
                                                className="hidden group-focus/btn:inline">Subscribed</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="CSS Animations" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">CSS Animations</h6>
                                            <p className="text-sm text-gray-300">460K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white"><span
                                            className="group-focus/btn:hidden">Subscribed</span><span
                                                className="hidden group-focus/btn:inline">Subscribe</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">ML Image</h6>
                                            <p className="text-sm text-gray-300">480K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-white focus:bg-[#ae7aff]"><span
                                            className="group-focus/btn:hidden">Subscribe</span><span
                                                className="hidden group-focus/btn:inline">Subscribed</span></button></div>
                                </div>
                                <div className="flex w-full justify-between">
                                    <div className="flex items-center gap-x-2">
                                        <div className="h-14 w-14 shrink-0"><img
                                            src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            alt="React Patterns" className="h-full w-full rounded-full" /></div>
                                        <div className="block">
                                            <h6 className="font-semibold">React Patterns</h6>
                                            <p className="text-sm text-gray-300">500K Subscribers</p>
                                        </div>
                                    </div>
                                    <div className="block"><button
                                        className="group/btn px-3 py-2 text-black bg-[#ae7aff] focus:bg-white"><span
                                            className="group-focus/btn:hidden">Subscribed</span><span
                                                className="hidden group-focus/btn:inline">Subscribe</span></button></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Subscribers;