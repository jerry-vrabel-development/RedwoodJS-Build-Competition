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
          <h1 className="flex items-center text-xl font-bold">
            <Link to={routes.home()} className="flex items-center">
              Redwood
            </Link>
          </h1>
          <Link to={routes.home()} className="">
            <HomeIcon className="h-6 w-6 text-blue-500" />
            Home
          </Link>

          {isAdmin && (
            <Link to={routes.admin()} className="">
              <UserGroupIcon className="h-6 w-6" /> Admin
            </Link>
          )}

          <Link to={routes.about()} className="">
            <InformationCircleIcon className="h-6 w-6" />
            About
          </Link>
          <Link to={routes.contact()} className="">
            <ChatBubbleLeftIcon className="h-6 w-6" />
            Contact
          </Link>
          {isAuthenticated && (
            <Link to={routes.profile({ id: currentUser.id })} className="">
              <UserCircleIcon className="h-6 w-6" />
              Profile
            </Link>
          )}
        </div>

        {isAuthenticated && currentUser ? (
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-2">
              <UserCircleIcon className="h-6 w-6" />
              Logged in as {currentUser.roles}
            </span>
            <button
              type="button"
              onClick={logOut}
              className="rounded bg-red-500 px-4 py-2  transition-colors duration-300 hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to={routes.login()}>
            <button
              type="button"
              className="rounded bg-orange-500 px-4 py-2 transition-colors duration-300 hover:bg-orange-700"
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
