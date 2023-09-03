import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center p-5">
      <MetaTags title="About" description="About page" />

      <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">About Us</h2>
        <p className="text-gray-600 mb-8">
          This site was created to demonstrate my mastery of Redwood: Look on my
          works, ye mighty, and despair!
        </p>
        <Link to={routes.home()} className="text-teal-600 hover:text-teal-800 underline">Return home</Link>
      </div>
    </div>
  )
}

export default AboutPage;
