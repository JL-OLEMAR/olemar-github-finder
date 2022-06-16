import { useContext } from 'react'

import { GithubContext } from '../../context'
import { Spinner } from '../layout/Spinner.jsx'
import { UserItem } from './UserItem.jsx'

export function UserList () {
  const { users, loading } = useContext(GithubContext)

  loading && <Spinner />

  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}
