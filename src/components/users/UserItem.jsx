import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export function UserItem({ user }) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full w-14 h-14 shadow'>
              <img alt={`${user.login} Profile`} src={user.avatar_url} />
            </div>
          </div>
        </div>

        <div>
          <h2 className='card-title'>{user.login}</h2>
          <Link
            className='text-opacity-40 text-base-content'
            to={`/user/${user.login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}
