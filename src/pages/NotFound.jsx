import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

export function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='mb-8 text-8xl font-bold'>Oops!</h1>
          <p className='mb-8 text-5xl'>404 - Page Not Found!</p>
          <Link className='btn btn-primary btn-lg' to='/'>
            <FaHome className='mr-2' />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}
