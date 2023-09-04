import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="bg-gray-200 min-h-screen p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Welcome to My Website</h1>
          <p className="text-lg text-gray-700">This is a RedwoodJS site with Tailwind CSS.</p>
        </header>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Featured Articles</h2>
          <ul>
            <li className="mb-4">
              <Link  className="text-blue-600 hover:underline">Dummy Article 1</Link>
            </li>
            <li className="mb-4">
              <Link  className="text-blue-600 hover:underline">Dummy Article 2</Link>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-lg text-gray-700">RedwoodJS and Tailwind CSS. Our mission is to create beautiful and functional web apps.</p>
        </section>

        <footer className="mt-6">
          <p className="text-gray-600 text-center">© 2023 All Rights Reserved</p>
        </footer>
      </div>
    </>
  )
}

export default HomePage
