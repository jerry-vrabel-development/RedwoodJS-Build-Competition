import { useAuth } from 'src/auth'
import Nav from 'src/components/Nav/Nav'

const DefaultLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
  <>
    <header className="bg-blue-600 p-4 text-white">
      <Nav />
    </header>
    <main className="container mx-auto mt-6 p-4">{children}</main>
      </>
  )
}

export default DefaultLayout;
