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
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const isAdmin =
    isAuthenticated &&
    currentUser &&
    currentUser.roles &&
    currentUser.roles.includes('admin')

  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex items-center space-x-4">
          <Link to={routes.home()} className="rounded text-blue-800 bg-orange-100 px-4 py-2 transition-colors duration-300 hover:bg-orange-400 hover:text-blue-100">
            <HomeIcon className="h-6 w-6 text-blue-500" />
            Home
          </Link>

          {isAdmin && (
            <Link to={routes.admin()} className="rounded text-blue-800 bg-orange-100 px-4 py-2 transition-colors duration-300 hover:bg-orange-400 hover:text-blue-100">
              <UserGroupIcon className="h-6 w-6" /> Admin
            </Link>
          )}

          <Link to={routes.about()} className="rounded text-blue-800 bg-orange-100 px-4 py-2 transition-colors duration-300 hover:bg-orange-400 hover:text-blue-100">
            <InformationCircleIcon className="h-6 w-6" />
            About
          </Link>
          <Link to={routes.contact()} className="rounded text-blue-800 bg-orange-100 px-4 py-2 transition-colors duration-300 hover:bg-orange-400 hover:text-blue-100">
            <ChatBubbleLeftIcon className="h-6 w-6" />
            Contact
          </Link>
          {isAuthenticated && (
            <Link to={routes.profile({ id: currentUser.id })} className="rounded text-blue-800 bg-orange-100 px-4 py-2 transition-colors duration-300 hover:bg-orange-400 hover:text-blue-100">
              <UserCircleIcon className="h-6 w-6" />
              Profile
            </Link>
          )}
        </div>

        {isAuthenticated && currentUser ? (
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-2 mr-2">
              <UserCircleIcon className="h-6 w-6 mr-4 mt-1" />
              Logged in as {currentUser.roles}
            </span>
            <button
              type="button"
              onClick={logOut}
              className="rounded text-blue-800 bg-orange-100 px-4 py-2  transition-colors duration-300 hover:bg-orange-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to={routes.login()}>
            <button
              type="button"
              className="rounded text-blue-800 bg-orange-100 px-4 py-2 transition-colors duration-300 hover:bg-orange-400 hover:text-blue-100"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Nav
