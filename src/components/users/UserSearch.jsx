import { useContext } from 'react'

import { searchUsers } from '../../services'
import { GithubContext } from '../../context'
import { useForm } from '../../hooks'
import { types } from '../../types'

export function UserSearch () {
  const [{ search }, handleInputChange, reset] = useForm({ search: '' })
  const { users, dispatch } = useContext(GithubContext)

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    if (search !== '') {
      dispatch({ type: types.setLoading })
      const userSearch = await searchUsers(search)
      dispatch({ type: types.getUsers, payload: userSearch })
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
          onClick={() => dispatch({ type: types.clearUsers })}
          className='btn btn-outline btn-lg'
          type='button'
        >
          Clear
        </button>
      )}
    </div>
  )
}
