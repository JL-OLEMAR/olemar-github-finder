import PropTypes from 'prop-types'
import { RepoItem } from './RepoItem.jsx'

export function RepoList ({ repos }) {
  const orderedRepos = repos.sort((a, b) => (new Date(b.created_at) - new Date(a.created_at)))

  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>
          Latest Repositories
        </h2>
        {orderedRepos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}

RepoList.prototype = {
  repos: PropTypes.array.isRequired
}
