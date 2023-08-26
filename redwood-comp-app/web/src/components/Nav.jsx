import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'

const Nav = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const isAdmin = isAuthenticated && currentUser && currentUser.roles && currentUser.roles.includes("admin");


  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">
            <Link to={routes.home()} className="hover:underline">Redwood</Link>
          </h1>
          <Link to={routes.home()} className="hover:underline">Home</Link>

          {isAdmin && <Link to={routes.admin()} className="hover:underline">Admin</Link>}

          <Link to={routes.about()} className="hover:underline">About</Link>
          <Link to={routes.contact()} className="hover:underline">Contact</Link>
        </div>

        {isAuthenticated && currentUser ? (
          <div className="flex items-center space-x-4">
            <span>Logged in as {currentUser.roles}</span>
            <button
              type="button"
              onClick={logOut}
              className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to={routes.login()} className="hover:underline">Login</Link>
        )}
      </div>
    </header>
  )
}

export default Nav
