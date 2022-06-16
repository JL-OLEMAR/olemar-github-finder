import { useContext } from 'react'

import { GithubContext, UIContext } from '../../context'
import { Spinner } from '../layout/Spinner.jsx'
import { UserItem } from './UserItem.jsx'

export function UserList () {
  const { state: { users } } = useContext(GithubContext)
  const { ui: { loading } } = useContext(UIContext)

  loading && <Spinner />

  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}
