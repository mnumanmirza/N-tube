import React from 'react'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'

function Editpersonalinfo() {
    return (
        <>
        <SideBar/>
            <div className=" bg-[#121212] text-white">
                <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
                    <section className="w-full pl-4 pb-4 sm:pl-6 sm:pb-6 md:pl-8 md:pb-8 lg:pl-12 lg:pb-12 xl:pl-16 xl:pb-16">
                        <div className="relative min-h-[150px] w-full pt-[16.28%]">
                            <div className="absolute inset-0 overflow-hidden"><img
                                src="https://images.pexels.com/photos/1092424/pexels-photo-1092424.jpeg?auto=compress"
                                alt="cover-photo" /></div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><input type="file"
                                id="cover-image" className="hidden" />
                                <label htmlFor="cover-image"
                                    className="inline-block h-10 w-10 cursor-pointer rounded-lg bg-white/60 p-1 text-[#ae7aff] hover:bg-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                        />
                                    </svg>
                                </label></div>
                        </div>
                        <div className="px-4 pb-4">
                            <div className="flex flex-wrap gap-4 pb-4 pt-6">
                                <div
                                    className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
                                    <img src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Channel" className="h-full w-full" />
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><input type="file"
                                        id="profile-image" className="hidden" /><label htmlFor="profile-image"
                                            className="inline-block h-8 w-8 cursor-pointer rounded-lg bg-white/60 p-1 text-[#ae7aff] hover:bg-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                                />
                                            </svg>
                                        </label></div>
                                </div>
                                <div className="mr-auto inline-block">
                                    <h1 className="font-bolg text-xl">React Patterns</h1>
                                    <p className="text-sm text-gray-400">@reactpatterns</p>
                                </div>
                                <div className="inline-block"><button
                                    className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">View
                                    channel</button></div>
                            </div>
                            <ul
                                className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px]">
                                <li className="w-full"><button
                                    className="w-full border-b-2 border-[#ae7aff] bg-white px-3 py-1.5 text-[#ae7aff]">Personal
                                    Information</button></li>
                                <li className="w-full">
                                <Link to="/Editchanelinfopg">
                                    <button
                                    className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">Channel
                                    Information</button></Link>
                                    </li>
                                <li className="w-full">
                                    <Link to="/Changepasswordpg">
                                    <button
                                    className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">Change
                                    Password</button></Link>
                                    </li>
                            </ul>
                            <div className="flex flex-wrap justify-center gap-y-4 py-4">
                                <div className="w-full sm:w-1/2 lg:w-1/3">
                                    <h5 className="font-semibold">Personal Info</h5>
                                    <p className="text-gray-300">Update your photo and personal details.</p>
                                </div>
                                <div className="w-full sm:w-1/2 lg:w-2/3">
                                    <div className="rounded-lg border">
                                        <div className="flex flex-wrap gap-y-4 p-4">
                                            <div className="w-full lg:w-1/2 lg:pr-2"><label htmlFor="firstname"
                                                className="mb-1 inline-block">First name</label><input type="text"
                                                    className="w-full rounded-lg border bg-transparent px-2 py-1.5" id="firstname"
                                                    placeholder="Enter first name" value="React" /></div>
                                            <div className="w-full lg:w-1/2 lg:pl-2"><label htmlFor="lastname"
                                                className="mb-1 inline-block">Last name</label><input type="text"
                                                    className="w-full rounded-lg border bg-transparent px-2 py-1.5" id="lastname"
                                                    placeholder="Enter last name" value="Patterns" /></div>
                                            <div className="w-full"><label htmlFor="lastname" className="mb-1 inline-block">Email
                                                address</label>
                                                <div className="relative">
                                                    <div className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-300">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            aria-hidden="true"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                                            />
                                                        </svg>
                                                    </div><input type="email"
                                                        className="w-full rounded-lg border bg-transparent py-1.5 pl-10 pr-2"
                                                        id="lastname" placeholder="Enter email address"
                                                        value="patternsreact@gmail.com" />
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="border border-gray-300" />
                                        <div className="flex items-center justify-end gap-4 p-4"><button
                                            className="inline-block rounded-lg border px-3 py-1.5 hover:bg-white/10">Cancel</button><button
                                                className="inline-block bg-[#ae7aff] px-3 py-1.5 text-black">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Editpersonalinfo
