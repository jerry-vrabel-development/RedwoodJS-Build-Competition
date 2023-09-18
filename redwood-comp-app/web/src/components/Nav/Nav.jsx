import { useState } from 'react'
import {
  HomeIcon,
  UserGroupIcon,
  InformationCircleIcon,
  UserCircleIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/solid'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const isAdmin =
    isAuthenticated &&
    currentUser &&
    currentUser.roles &&
    currentUser.roles.includes('admin')

  return (
    <nav className="bg-blue shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
          <div className="flex space-x-4">
              <ul className="hidden md:flex items-center text-blue-200 space-x-4">
                <Link to={routes.home()} className="py-5 px-3  hover:text-gray-900">
                  <HomeIcon className="h-6 w-6" />
                    Home
                </Link>

                {isAdmin && (
                <Link to={routes.admin()} className="py-5 px-3  hover:text-gray-900">
                  <UserGroupIcon className="h-6 w-6" />
                    Admin
                </Link>
                )}

                <Link to={routes.about()} className="py-5 px-3  hover:text-gray-900">
                  <InformationCircleIcon className="h-6 w-6" />
                    About
                </Link>

                <Link to={routes.contact()} className="py-5 px-3  hover:text-gray-900">
                  <ChatBubbleLeftIcon className="h-6 w-6" />
                    Contact
                </Link>

                {isAuthenticated && (
                <Link to={routes.profile({ id: currentUser.id })} className="">
                  <UserCircleIcon className="h-6 w-6 hover:text-gray-900" />
                    Profile
                </Link>
                )}
              </ul>
            </div>

            <div className="flex space-x-4">
              <ul className="hidden md:flex items-center text-blue-200 space-x-4">
                {isAuthenticated && currentUser ? (
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-2 mr-2">
                    <UserCircleIcon className="h-6 w-6 mr-4 mt-1" />
                      Logged in as {currentUser.roles}
                    </span>
                    <button
                      type="button"
                      onClick={logOut}
                      className="
                        rounded
                        bg-blue-900
                        px-4
                        py-2
                        transition-colors
                        duration-300
                        hover:bg-orange-700"
                    >
                      Logout
                    </button>
                  </div>
                  ) : (
                  <div className="flex items-center text-blue-200 space-x-4">
                    <Link to={routes.login()}>
                      <button
                        type="button"
                        className=""
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                  )}
              </ul>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden z-10 block items-center">
              <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                {/* SVG for Hamburger Menu */}
                <svg xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mb-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
            </button>
          </div>

      {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'absolute' : 'hidden'}  bg-blue-200 w-9/12 md:hidden`}>
          <ul className="text-blue-800">
            <Link to={routes.home()} className="block transition duration-500 transform px-2 pt-2 m-0 bg-teal-400 hover:bg-indigo-400
               border-2 border-blue-500 hover:border-orange-500
               hover:text-white
               hover:opacity-50
               hover:shadow-md
               hover:scale-95">
              <HomeIcon className="h-4 w-4" />
                Home
            </Link>
              {isAdmin && (
            <Link to={routes.admin()} className="block py-2 px-2 text-sm text-blue-800 hover:text-blue-100 hover:bg-blue-900">
              <UserGroupIcon className="h-4 w-4" />
                Admin
            </Link>
        )}

        {isAuthenticated && (
            <Link to={routes.profile({ id: currentUser.id })} className="block py-2 px-2 text-sm text-blue-800 hover:text-blue-100 hover:bg-blue-900">
              <UserCircleIcon className="h-4 w-4" />
                Profile
            </Link>
        )}
            <Link to={routes.about()} className="block py-2 px-2 text-sm text-blue-800 hover:text-blue-100 hover:bg-blue-900">
              <InformationCircleIcon className="h-4 w-4" />
                About
            </Link>
            <Link to={routes.contact()} className="block py-2 px-2 text-sm text-blue-800 hover:text-blue-100 hover:bg-blue-900">
              <ChatBubbleLeftIcon className="h-4 w-4" />
                Contact
            </Link>
        {isAuthenticated && currentUser ? (
          <div className="block py-2 px-2 text-sm  hover:text-gray-900">
            <UserCircleIcon className="h-4 w-4" />
              Logged in as {currentUser.roles}
                <button
                  type="button"
                  onClick={logOut}
                  className="
                    rounded
                  bg-orange-100
                    mt-2
                    p-2
                    transition-colors
                    duration-300
                    hover:bg-orange-700"
                >
                  Logout
                </button>
          </div>
        ) : (
          <div className="">
            <Link to={routes.login()} className="block py-2 px-2 text-sm hover:text-gray-900">
              <UserCircleIcon className="h-4 w-4" />
                Login
            </Link>
          </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Nav
