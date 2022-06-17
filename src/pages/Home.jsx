import { useUsers } from '../hooks'
import { UserList, UserSearch } from '../components'

export function Home() {
  const {
    users,
    loading,
    handleSearchSubmit,
    handleSetAlert,
    handleClearUsers
  } = useUsers()

  return (
    <>
      <div className='grid grid-cols-1 tablet:grid-cols-2 mb-8 gap-8 laptop:grid-cols-2 desktop:grid-cols-2'>
        <UserSearch
          onGetUsers={handleSearchSubmit}
          onUISetAlert={handleSetAlert}
        />

        {users.length > 0 && (
          <button
            className='btn btn-outline btn-lg'
            type='button'
            onClick={handleClearUsers}
          >
            Clear
          </button>
        )}
      </div>

      <UserList loading={loading} users={users} />
    </>
  )
}
