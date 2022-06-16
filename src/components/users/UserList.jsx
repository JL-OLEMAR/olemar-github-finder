import PropTypes from 'prop-types'
import { Spinner } from '../layout/Spinner.jsx'
import { UserItem } from './UserItem.jsx'

export function UserList ({ users, loading }) {
  loading && <Spinner />

  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}

UserList.defaultProps = {
  users: [],
  loading: false
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}
