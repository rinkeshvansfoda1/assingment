import React from 'react'

export default function Search_bar() {
  return (
      <div className="pl-28 pr-28 bg-gray-100">
      <div className="text-left sm:text-left">
        <div className="flex flex-wrap justify-between">
          <h1 className="text-black-500 text-2xl md:text-xl lg:text-4xl font-bold pt-14 pb-6 float-left">Search
            properties to rent</h1>
          <form className="sm:pb-6 md:pb-6 sm:pt-14 md:pt-14 lg:pt-14 xl:pt-14 2xl:pt-14 sm:w-32 md:w-56 lg:w-56 xl:w-56 2xl:w-56">
          {/* md:pt-10 lg:pt-10 */}
            <label htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
              <input type="search" id="default-search"
                className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search with Search Bar" required />
            </div>
          </form>
        </div>
      </div>
      </div>
  );
};