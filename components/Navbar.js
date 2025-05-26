"use client";
import React from "react";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
const Navbar = () => {
  const { data: session } = useSession();
  const [showDropDown, setshowDropDown] = useState(false);

  return (
    <nav className="flex bg-indigo-950/0 text-white justify-between px-10 mt-1 items-center h-10 sticky top-1">
      <Link href={"/"}>
        <div className="font-bold text-xl pl-10">GetMeAChai!</div>
      </Link>
      <ul className="flex items-center justify-center gap-6">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <li>About</li>
        <li>Projects</li>
      </ul>
      <div className="flex items-center justify-center gap-4">
        {/* show login button if there is no session */}
        {!session && (
          <div>
            <Link href={"/login"}>
              <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center me-2 mb-2 mt-2">
                Log In
              </button>
            </Link>
          </div>
        )}
        {/* show login button if there is session */}
        {session && (
          <div className="relative" onMouseLeave={() => setshowDropDown(false)}>
            <button
              id="dropdownDividerButton"
              data-dropdown-toggle="dropdownDivider"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center mb-2 mt-2.5 flex items-center justify-center"
              type="button"
              onMouseEnter={() => setshowDropDown(true)}
            >
              Welcome {session.user.name}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdownDivider"
              className={`z-10 ${
                showDropDown ? "" : "hidden"
              } absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full dark:bg-gray-700 dark:divide-gray-600`}
              onMouseEnter={() => setshowDropDown(true)}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDividerButton"
              >
                <li>
                  <Link
                    href={`/`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/profile"}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Your Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/settings"}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </Link>
                </li>
              </ul>
              {/* I will put logout button in profile page */}
              {/* <div
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                onClick={() => signOut()}
              >
                Log Out
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
