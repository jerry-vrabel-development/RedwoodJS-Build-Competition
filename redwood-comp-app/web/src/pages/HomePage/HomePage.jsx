import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="min-h-screen bg-blue-100 p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Home Title</h1>header
        </header>
        <section className="mb-6">
        <p className="text-lg">llama</p>
        </section>
      </div>
    </>
  )
}

export default HomePage
