import React from "react";
import image from "../assets/img/Saly-10.png";

function Header() {
  return (
    <>
      <section className="bg-[#6176F7] dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className="text-orange-300 text-2xl font-semibold font-['Public Sans'] leading-loose tracking-tight">
              START TO SUCCESS
            </div>
            <div className="text-white text-[56px] font-semibold font-['Public Sans'] leading-[72px] mb-4">
              Access To 5000+ Courses
              <br />
              from 300 Instructors <br />& Institutions
            </div>
            <div className="text-zinc-300 text-xl font-normal font-['Public Sans'] leading-7 mb-6">
              Various versions have evolved over the years, sometimes by
              accident,
            </div>

            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-orange-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-orange-400"
                  placeholder="What do want to learn?"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-gradient-to-b from-orange-300 to-orange-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div class="lg:mt-0 lg:col-span-5 lg:flex">
            <img src={image} alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
