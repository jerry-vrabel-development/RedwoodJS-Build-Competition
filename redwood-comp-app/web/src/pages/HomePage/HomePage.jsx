import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="min-h-screen bg-gray-200 p-6">
        <header className="mb-6">
          <h1 className="mb-2 text-3xl font-bold">Welcome to My Website</h1>
          <p className="text-lg text-gray-700">
            This is a RedwoodJS site with Tailwind CSS.
          </p>
        </header>

        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">Featured Articles</h2>
          <ul>
            <li className="mb-4">
              <Link className="text-blue-600 hover:underline">
                Dummy Article 1
              </Link>
            </li>
            <li className="mb-4">
              <Link className="text-blue-600 hover:underline">
                Dummy Article 2
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 text-2xl font-semibold">About Us</h2>
          <p className="text-lg text-gray-700">
            RedwoodJS and Tailwind CSS. Our mission is to create beautiful and
            functional web apps.
          </p>
        </section>
      </div>
    </>
  )
}

export default HomePage
