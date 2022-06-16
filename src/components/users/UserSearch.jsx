import { useContext } from 'react'

import { searchUsers } from '../../services'
import { GithubContext, UIContext } from '../../context'
import { useForm } from '../../hooks'
import { types } from '../../types'

export function UserSearch () {
  const [{ search }, handleInputChange, reset] = useForm({ search: '' })
  const { state: { users }, dispatchGithub } = useContext(GithubContext)
  const { dispatchUI } = useContext(UIContext)

  const onUISetAlert = (msg, type) => {
    dispatchUI({ type: types.uiSetAlert, payload: { msg, type } })
    setTimeout(() => dispatchUI({ type: types.uiRemoveAlert }), 3000)
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    if (search === '') {
      onUISetAlert('Please enter something', 'error')
    } else {
      dispatchUI({ type: types.uiStartLoading })
      const userSearch = await searchUsers(search)
      dispatchGithub({ type: types.githubGetUsers, payload: userSearch })
      dispatchUI({ type: types.uiFinishLoading })
      reset()
    }
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>

            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search Users...'
                value={search}
                name='search'
                onChange={handleInputChange}
              />

              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >Go
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Button Clear */}
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
  )
}
