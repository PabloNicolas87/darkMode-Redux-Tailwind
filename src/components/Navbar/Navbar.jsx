import React, { useState } from 'react';
import ContainerButtons from '../ContainerButtons/ContainerButtons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-200 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src="/images/logo.png" width="80" alt="" class="logo" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-400">
            Category 1
          </a>
          <a href="#" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-400">
            Category 2
          </a>
          <a href="#" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-400">
            Category 3
          </a>
          <a href="#" className="text-gray-800 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-400">
            Category 4
          </a>
          {/* Theme Toggle Button */}
          <ContainerButtons />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ContainerButtons />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-2 text-gray-800 dark:text-gray-100 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" // Menú hamburguesa
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-start transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="bg-white dark:bg-gray-800 w-4/5 h-full">
          {/* Header with Logo and Theme Toggle Button */}
          <div className="flex justify-between items-center p-4 bg-slate-200 dark:bg-gray-700">
            <img src="/images/logo.png" width="80" alt="" class="logo" />
            <button onClick={() => setIsOpen(false)} className="text-gray-800 dark:text-gray-100">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Categories */}
          <div className="space-y-2 p-4">
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-slate-300 dark:hover:bg-gray-700"
            >
              Category 1
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-slate-300 dark:hover:bg-gray-700"
            >
              Category 2
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-slate-300 dark:hover:bg-gray-700"
            >
              Category 3
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-slate-300 dark:hover:bg-gray-700"
            >
              Category 4
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
