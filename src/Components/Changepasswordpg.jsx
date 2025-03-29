import React from 'react'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'

function Changepasswordpg() {
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
                            <div className="flex flex-wrap gap-4 pb-4 pt-6">
                                <div
                                    className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
                                    <img src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Channel" className="h-full w-full" /></div>
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
                                <li className="w-full">
                                    <Link to="/Editpersonalinfo">
                                        <button
                                            className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">Personal
                                            Information</button></Link>
                                </li>
                                <li className="w-full">
                                    <Link to="/Editchanelinfopg">
                                        <button
                                            className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">Channel
                                            Information</button></Link>
                                </li>
                                <li className="w-full"><button
                                    className="w-full border-b-2 border-[#ae7aff] bg-white px-3 py-1.5 text-[#ae7aff]">Change
                                    Password</button></li>
                            </ul>
                            <div className="flex flex-wrap justify-center gap-y-4 py-4">
                                <div className="w-full sm:w-1/2 lg:w-1/3">
                                    <h5 className="font-semibold">Password</h5>
                                    <p className="text-gray-300">Please enter your current password to change your password.</p>
                                </div>
                                <div className="w-full sm:w-1/2 lg:w-2/3">
                                    <div className="rounded-lg border">
                                        <div className="flex flex-wrap gap-y-4 p-4">
                                            <div className="w-full"><label className="mb-1 inline-block" htmlFor="old-pwd">Current
                                                password</label><input type="password"
                                                    className="w-full rounded-lg border bg-transparent px-2 py-1.5" id="old-pwd"
                                                    placeholder="Current password" /></div>
                                            <div className="w-full"><label className="mb-1 inline-block" htmlFor="new-pwd">New
                                                password</label><input type="password"
                                                    className="w-full rounded-lg border bg-transparent px-2 py-1.5" id="new-pwd"
                                                    placeholder="New password" />
                                                <p className="mt-0.5 text-sm text-gray-300">Your new password must be more than 8
                                                    characters.</p>
                                            </div>
                                            <div className="w-full"><label className="mb-1 inline-block" htmlFor="cnfrm-pwd">Confirm
                                                password</label><input type="password"
                                                    className="w-full rounded-lg border bg-transparent px-2 py-1.5" id="cnfrm-pwd"
                                                    placeholder="Confirm password" /></div>
                                        </div>
                                        <hr className="border border-gray-300" />
                                        <div className="flex items-center justify-end gap-4 p-4"><button
                                            className="inline-block rounded-lg border px-3 py-1.5 hover:bg-white/10">Cancel</button><button
                                                className="inline-block bg-[#ae7aff] px-3 py-1.5 text-black">Update
                                                Password</button></div>
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

export default Changepasswordpg
