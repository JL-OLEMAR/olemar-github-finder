import PropTypes from 'prop-types'
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

export function RepoItem({ repo }) {
  return (
    <div className='card mb-2 rounded-md bg-base-200 hover:bg-base-300'>
      <div className='card-body'>
        <h3 className='mb-2 text-xl font-semibold'>
          <a href={repo.html_url}>
            <FaLink className='inline mr-1' /> {repo.name}
          </a>
        </h3>

        <p className='mb-3'>{repo.description}</p>

        <div>
          <div className='badge badge-info badge-lg mr-2'>
            <FaEye className='mr-2' /> {repo.watchers_count}
          </div>

          <div className='badge badge-success badge-lg mr-2'>
            <FaStar className='mr-2' /> {repo.stargazers_count}
          </div>

          <div className='badge badge-error badge-lg mr-2'>
            <FaInfo className='mr-2' /> {repo.open_issues}
          </div>

          <div className='badge badge-warning badge-lg mr-2'>
            <FaUtensils className='mr-2' /> {repo.forks}
          </div>
        </div>
      </div>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}
