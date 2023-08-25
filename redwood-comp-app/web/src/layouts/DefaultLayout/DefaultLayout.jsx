import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'

const DefaultLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link to={routes.home()} className="hover:underline">Redwood</Link>
          </h1>
          {isAuthenticated && currentUser ? (
            <div className="flex items-center">
              <span className="mr-4">Logged in as {currentUser.email}</span>
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
        <nav className="mt-2">
          <ul className="container mx-auto flex space-x-4">
            <li>
              <Link to={routes.home()} className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to={routes.about()} className="hover:underline">About</Link>
            </li>
            <li>
              <Link to={routes.contact()} className="hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto mt-6 p-4">{children}</main>
    </>
  )
}

export default DefaultLayout
