import { useAuth } from 'src/auth'
import { Link, routes } from '@redwoodjs/router'
import Nav from 'src/components/Nav/Nav'
import Footer from 'src/components/Footer/Footer'

const DefaultLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
  <>
    <header className="pl-6 bg-blue-600 text-white">
    <h1 className="flex items-center text-xl font-bold">
            <Link to={routes.home()} className="flex items-center text-blue-100 transition-colors duration-300 hover:text-orange-600">
              Redwood
            </Link>
          </h1>
      <Nav />
    </header>
    <main className="container mx-auto mt-6 p-4">{children}</main>
    <Footer />
  </>
  )
}

export default DefaultLayout;
