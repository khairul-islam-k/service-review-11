import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router';
import { FaHome, FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";

const DashBoard = () => {
    const dashLink = <>
        <NavLink to="/" className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary hover:text-white transition">
            <FaHome className="text-lg" />
            <li>Back to Home</li>
        </NavLink>

        {/* Tracking */}
        <NavLink
            to="/dashboard/tracking"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary hover:text-white transition"
        >
            <FaMapMarkerAlt className="text-lg" />
            <li>Tracking</li>
        </NavLink>

        {/* Profile */}
        <NavLink
            to="/dashboard/profile"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary hover:text-white transition"
        >
            <FaUserCircle className="text-lg" />
            <li>My Profile</li>
        </NavLink>
    </>

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute('data-theme', localTheme);
      }, [])
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* Navbar */}
                <div className="navbar bg-base-200 w-full  lg:hidden">
                    <div className="flex-none">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">DashBoard</div>
                </div>
                {/* Page content here */}
                <Outlet></Outlet>
                {/* Page content here */}
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    {/* <ProFastLogo></ProFastLogo> */}
                    {dashLink}

                </ul>
            </div>
        </div>
    );
};

export default DashBoard;