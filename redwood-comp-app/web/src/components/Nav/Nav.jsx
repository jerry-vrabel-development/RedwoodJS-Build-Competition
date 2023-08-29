import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'
import { HomeIcon, UserGroupIcon, InformationCircleIcon, UserCircleIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid'


const Nav = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const isAdmin = isAuthenticated && currentUser && currentUser.roles && currentUser.roles.includes("admin");


  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold flex items-center">
            <Link to={routes.home()} className="hover:underline flex items-center">
              Redwood
            </Link>
          </h1>
          <Link to={routes.home()} className="hover:underline">
          <HomeIcon className="h-6 w-6 text-blue-500" />Home</Link>

          {isAdmin && <Link to={routes.admin()} className="hover:underline">
          <UserGroupIcon className="h-6 w-6" /> Admin</Link>}

          <Link to={routes.about()} className="hover:underline">
          <InformationCircleIcon className="h-6 w-6" />About</Link>
          <Link to={routes.contact()} className="hover:underline">
          <ChatBubbleLeftIcon className='h-6 w-6' />Contact</Link>
        </div>

        {isAuthenticated && currentUser ? (
          <div className="flex items-center space-x-4">
            <span className='flex items-center space-x-2'>
            <UserCircleIcon className="h-6 w-6" />Logged in as {currentUser.roles}</span>
            <button
              type="button"
              onClick={logOut}
              className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to={routes.login()} >
          <button
          type="button"
          className="px-4 py-2 bg-orange-500 hover:bg-orange-700 rounded transition-colors duration-300"
           >Login</button></Link>
        )}
      </div>
    </header>
  )
}

export default Nav
