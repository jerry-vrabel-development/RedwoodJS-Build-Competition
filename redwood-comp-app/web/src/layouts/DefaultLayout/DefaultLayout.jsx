import { Link, routes } from '@redwoodjs/router'

const DefaultLayout = ({ children }) => {
  return (
    <>
    <header>
      <h1>
        <Link to={routes.home()}>Redwood</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </>
  )
}

export default DefaultLayout
