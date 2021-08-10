import React, { useState } from "react";

const NavBar = () => {
  const [toggle, settoggle] = useState(false);
  console.log(toggle);
  return (
    <nav className="bg-green-400 sm:bg-white ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => settoggle(!toggle)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-700 sm:hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6  text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="invisible  sm:visible  h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div className="invisible sm:visible  sm:block sm:ml-auto">
              <div className="flex space-x-10    right-0">
                <a
                  href="#"
                  className="text-black hover:bg-green-700 sm:hover:bg-green-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-black hover:bg-green-700 sm:hover:bg-green-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-black hover:bg-green-700 sm:hover:bg-green-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-black hover:bg-green-700 sm:hover:bg-green-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Clients
                </a>

                <a
                  href="#"
                  className="text-black hover:bg-green-700 sm:hover:bg-green-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>

                <a
                  href="#"
                  className="text-black hover:bg-green-700 sm:hover:bg-green-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Us!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          toggle ? "block" : "hidden"
        } sm:hidden bg-green-400 text-center`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="text-white hover:bg-green-700 sm:hover:bg-green-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>

          <a
            href="#"
            className="text-white hover:bg-green-700 sm:hover:bg-green-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-white hover:bg-green-700 sm:hover:bg-green-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="text-white hover:bg-green-700 sm:hover:bg-green-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Clients
          </a>
          <a
            href="#"
            className="text-white hover:bg-green-700 sm:hover:bg-green-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:bg-green-700 sm:hover:bg-green-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Us!
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
