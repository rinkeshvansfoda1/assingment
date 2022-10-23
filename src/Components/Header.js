import React from 'react'
import logo from "./estatery.png"

export default function Header() {
  return (
        <nav className="bg-purple-100">
          <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="#0" className="flex items-left py-4">
                  <img src={logo} alt="Logo" />
                  <span className="font-semibold text-gray-500 text-lg"></span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <a href="#0" className="py-4 px-2 text-gray-500 border-b-4 border-purple-500 font-semibold">Rent</a>
                <a href="#0"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">Buy</a>
                <a href="#0"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">Sell</a>
                <a href="#0"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">Manage Property</a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3 ">
              <a href="#0"
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-purple-500 hover:text-white transition duration-300">Log
                In</a>
              <a href="#0"
                className="py-2 px-2 font-medium text-white bg-purple-500 rounded hover:bg-purple-400 transition duration-300">Sign
                Up</a>
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg className=" w-6 h-6 text-gray-500 hover:text-purple-500 " x-show="!showMenu" fill="none"
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
          </div>
          <div className="hidden mobile-menu">
          <ul className="">
            <li className="active"><a href="index.html"
                className="block text-sm px-2 py-4 text-white bg-purple-500 font-semibold">Home</a></li>
            <li><a href="#0" className="block text-sm px-2 py-4 hover:bg-purple-500 transition duration-300">Services</a>
            </li>
            <li><a href="#0" className="block text-sm px-2 py-4 hover:bg-purple-500 transition duration-300">About</a></li>
            <li><a href="#0" className="block text-sm px-2 py-4 hover:bg-purple-500 transition duration-300">Manage Property</a>
            <select>
            </select>
            </li>
          </ul>
          </div>
        </nav>
  );
};