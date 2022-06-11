import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { searchUsers } from '../services'
import { GithubContext } from '../context'
import { useForm } from '../hooks'
import { Spinner } from '../components'
import { types } from '../types'

export function Home () {
  const [{ search }, handleInputChange, reset] = useForm({ search: '' })
  const { users, loading, dispatch } = useContext(GithubContext)

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    if (search !== '') {
      dispatch({ type: types.setLoading })
      const userSearch = await searchUsers(search)
      dispatch({ type: types.getUsers, payload: userSearch })
    }

    reset()
  }

  return (
    <>
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
        {users.length > 0 && (
          <button
            onClick={() => dispatch({ type: types.clearUsers })}
            className='btn btn-ghost btn-lg'
          >
            Clear
          </button>
        )}
      </div>

      {!loading
        ? (
          <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {users.map((user) => (
              <div key={user.id} className='card shadow-md compact side bg-base-100'>
                <div className='flex-row items-center space-x-4 card-body'>
                  <div>
                    <div className='avatar'>
                      <div className='rounded-full shadow w-14 h-14'>
                        <img src={user.avatar_url} alt='Profile' />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className='card-title'>{user.login}</h2>
                    <Link
                      className='text-base-content text-opacity-40'
                      to={`/user/${user.login}`}
                    >
                      Visit Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )
        : <Spinner />}
    </>
  )
}
