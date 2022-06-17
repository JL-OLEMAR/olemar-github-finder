import { Link } from 'react-router-dom'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'

import { useSingleUser } from '../hooks'
import { RepoList, Spinner } from '../components'

export function User() {
  const { user, loading, latestRepos, websiteUrl } = useSingleUser()

  if (loading) return <Spinner />

  return (
    <div className='w-full mx-auto laptop:w-10/12'>
      <div className='mb-4'>
        <Link className='btn btn-ghost' to='/'>
          {'< Back to search'}
        </Link>
      </div>

      <div className='grid grid-cols-1 tablet:grid-cols-3 mb-8 tablet:gap-8 laptop:grid-cols-3 desktop:grid-cols-3'>
        <div className='custom-card-image mb-6 tablet:mb-0'>
          <div className='card image-full rounded-lg shadow-xl'>
            <figure>
              <img alt={user.name} src={user.avatar_url} />
            </figure>

            <div className='card-body justify-end'>
              <h2 className='card-title mb-0'>{user.name}</h2>
              <p className='flex-grow-0'>{user.login}</p>
            </div>
          </div>
        </div>

        <div className='col-span-2'>
          <div className='mb-6'>
            <h1 className='card-title text-3xl'>
              {user.name}
              <div className='badge badge-success ml-2 mr-1'>{user.type}</div>
              {user.hireable && (
                <div className='badge badge-info mx-1'>Hireable</div>
              )}
            </h1>

            <p>{user.bio}</p>
            <div className='card-actions mt-4'>
              <a
                className='btn btn-outline'
                href={user.html_url}
                rel='noopener noreferrer'
                target='_blank'
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
                  <a
                    href={websiteUrl}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
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
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    {user.twitter_username}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className='stats w-full py-5 mb-6 rounded-lg shadow-md bg-base-100'>
        <div className='grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-4'>
          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaUsers className='text-3xl tablet:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Followers</div>
            <div className='stat-value pr-5 text-3xl tablet:text-4xl'>
              {user.followers}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaUserFriends className='text-3xl tablet:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Following</div>
            <div className='stat-value pr-5 text-3xl tablet:text-4xl'>
              {user.following}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaCodepen className='text-3xl tablet:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Public Repos</div>
            <div className='stat-value pr-5 text-3xl tablet:text-4xl'>
              {user.public_repos}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <FaStore className='text-3xl tablet:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Public Gists</div>
            <div className='stat-value pr-5 text-3xl tablet:text-4xl'>
              {user.public_gists}
            </div>
          </div>
        </div>
      </div>

      <RepoList repos={latestRepos} />
    </div>
  )
}
