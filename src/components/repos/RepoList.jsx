import PropTypes from 'prop-types'

import { RepoItem } from './RepoItem.jsx'

export function RepoList({ repos }) {
  return (
    <div className='card shadow-lg rounded-lg bg-base-100'>
      <div className='card-body'>
        <h2 className='card-title my-4 text-3xl font-bold'>
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}

RepoList.prototype = {
  repos: PropTypes.array.isRequired
}
