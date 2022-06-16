import { useUsers } from '../hooks'
import { UserList, UserSearch } from '../components'

export function Home () {
  const {
    users,
    loading,
    handleSearchSubmit,
    handleSetAlert,
    handleClearUsers
  } = useUsers()

  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <UserSearch onUISetAlert={handleSetAlert} onGetUsers={handleSearchSubmit} />

        {users.length > 0 && (
          <button onClick={handleClearUsers} className='btn btn-outline btn-lg' type='button'>
            Clear
          </button>
        )}
      </div>

      <UserList users={users} loading={loading} />
    </>
  )
}
