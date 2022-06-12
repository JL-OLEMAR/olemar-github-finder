import { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'

import { getReposByUser } from '../services'
import { GithubContext } from '../context'
import { RepoList, Spinner } from '../components'
import { types } from '../types'

export function User () {
  const { user, repos, loading, dispatch } = useContext(GithubContext)
  const params = useParams()

  useEffect(() => {
    dispatch({ type: types.setLoading })

    const getUser = async () => {
      const userData = await getReposByUser(params.login)
      dispatch({ type: types.getReposByUser, payload: userData })
    }

    getUser()
  }, [params.login])

  // NOTE: check for valid url to users website
  const websiteUrl = user.blog?.startsWith('http') ? user.blog : `https://${user.blog}`

  if (loading) return <Spinner />

  return (
    <div className='w-full mx-auto lg:w-10/12'>
      <div className='mb-4'>
        <Link to='/' className='btn btn-ghost'>
          {'< Back to search'}
        </Link>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
        <div className='custom-card-image mb-6 md:mb-0'>
          <div className='rounded-lg shadow-xl card image-full'>
            <figure>
              <img src={user.avatar_url} alt={user.name} />
            </figure>

            <div className='card-body justify-end'>
              <h2 className='card-title mb-0'>{user.name}</h2>
              <p className='flex-grow-0'>{user.login}</p>
            </div>
          </div>
        </div>

        <div className='col-span-2'>
          <div className='mb-6'>
            <h1 className='text-3xl card-title'>
              {user.name}
              <div className='ml-2 mr-1 badge badge-success'>{user.type}</div>
              {user.hireable && <div className='mx-1 badge badge-info'>Hireable</div>}
            </h1>

            <p>{user.bio}</p>
            <div className='mt-4 card-actions'>
              <a
                href={user.html_url}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-outline'
              >
                Visit Github Profile
              </a>
            </div>
          </div>

          <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
            {user.location && (
              <div className='stat'>
                <div className='stat-title text-md'>Location</div>
                <div className='text-lg stat-value'>{user.location}</div>
              </div>
            )}
            {user.blog && (
              <div className='stat'>
                <div className='stat-title text-md'>Website</div>
                <div className='text-lg stat-value'>
                  <a href={websiteUrl} target='_blank' rel='noopener noreferrer'>
                    {websiteUrl}
                  </a>
                </div>
              </div>
            )}
            {user.twitter_username && (
              <div className='stat'>
                <div className='stat-title text-md'>Twitter</div>
                <div className='text-lg stat-value'>
                  <a
                    href={`https://twitter.com/${user.twitter_username}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {user.twitter_username}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ----------------------- */}
      <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaUsers className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Followers</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {user.followers}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaUserFriends className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Following</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {user.following}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaCodepen className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Public Repos</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {user.public_repos}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaStore className='text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Public Gists</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {user.public_gists}
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------- */}
      <RepoList repos={repos} />
    </div>
  )
}
