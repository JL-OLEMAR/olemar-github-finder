import { useContext } from 'react'

import { searchUsers } from '../services'
import { GithubContext, UIContext } from '../context'
import { UserList, UserSearch } from '../components'
import { types } from '../types'

export function Home () {
  const { state: { users }, dispatchGithub } = useContext(GithubContext)
  const { ui: { loading }, dispatchUI } = useContext(UIContext)

  const onUISetAlert = (msg, type) => {
    dispatchUI({ type: types.uiSetAlert, payload: { msg, type } })
    setTimeout(() => dispatchUI({ type: types.uiRemoveAlert }), 3000)
  }

  const handleSearchSubmit = async (searchedText) => {
    dispatchUI({ type: types.uiStartLoading })

    try {
      const userSearch = await searchUsers(searchedText)
      dispatchGithub({ type: types.githubGetUsers, payload: userSearch })
      dispatchUI({ type: types.uiFinishLoading })
    } catch (error) {
      dispatchUI({ type: types.uiFinishLoading })
      console.log('error', error)
    }
  }

  return (
    <>
      <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <UserSearch onUISetAlert={onUISetAlert} onGetUsers={handleSearchSubmit} />

        {users.length > 0 && (
          <button
            onClick={() => dispatchGithub({ type: types.githubClearUsers })}
            className='btn btn-outline btn-lg'
            type='button'
          >
            Clear
          </button>
        )}
      </div>

      <UserList users={users} loading={loading} />
    </>
  )
}
