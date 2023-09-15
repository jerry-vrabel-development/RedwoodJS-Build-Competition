import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
        <div className="min-h-screen bg-blue-100 p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">About Title</h1>header
        </header>
          <section className="mb-6">section</section>
        </div>
    </>
  )
}

export default AboutPage
