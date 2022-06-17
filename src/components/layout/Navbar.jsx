import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import PropTypes from 'prop-types'

export function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link className='align-middle text-lg font-bold' to='/'>
            {title}
          </Link>
        </div>

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link className='btn btn-ghost btn-sm rounded-btn' to='/'>
              Home
            </Link>
            <Link className='btn btn-ghost btn-sm rounded-btn' to='/about'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder'
}

Navbar.propTypes = {
  title: PropTypes.string
}
