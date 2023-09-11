import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="min-h-screen bg-blue-100 p-6">
        <header className="mb-6">header</header>
        <section className="mb-6">section</section>
      </div>
    </>
  )
}

export default HomePage
