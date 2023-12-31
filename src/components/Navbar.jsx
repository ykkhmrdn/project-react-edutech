import React, { useState } from "react";
import LoginIcon from '@mui/icons-material/Login';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav class="bg-[#6176F7] border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <a href="https://flowbite.com" className="flex items-center">
            <div className="text-center">
                <span className="text-orange-300 text-5xl font-bold font-serif leading-10 tracking-tight italic">
                    e
                </span>
                <span className="text-white text-5xl font-bold font-serif leading-10 tracking-tight italic">
                    Dex
                </span>
            </div>
          </a>
          <div class="flex items-center lg:order-2">
            <a
              href="/"
              class=" dark:text-white hover:bg-primary-700 focus:ring-4 focus:ring-gray-300 rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 text-center text-white text-base font-medium font-['Public Sans'] leading-normal"
            >
            <LoginIcon />
              Login
            </a>
            <a
              href="/"
              class=" bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 lg:px-5 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 w-[167px] h-12 px-6 py-3 bg-gradient-to-b from-orange-300 to-orange-400 rounded-[100px] gap-2.5 inline-flex text-center text-white text-base font-normal font-['Public Sans'] leading-normal"
            >
              Sign up for Free
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-orange-300 font-semibold rounded bg-primary-700 lg:bg-transparent lg:text-orange-300 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-primary-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-primary-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-primary-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-primary-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
