import PropTypes from 'prop-types'
import { useForm } from '../../hooks'

export function UserSearch ({ onUISetAlert, onGetUsers }) {
  const [{ search }, handleInputChange, onResetForm] = useForm({ search: '' })

  const onSearchSubmit = async (evt) => {
    evt.preventDefault()
    if (search === '') return onUISetAlert('Please enter something', 'error')

    await onGetUsers(search)
    onResetForm()
  }

  return (
    <form onSubmit={onSearchSubmit}>
      <div className='form-control'>
        <div className='relative'>
          <input
            type='text'
            className='w-full pr-40 bg-gray-200 input input-lg text-black'
            placeholder='Search Users...'
            name='search'
            value={search}
            onChange={handleInputChange}
          />

          <button
            type='submit'
            className='absolute top-0 right-0 rounded-l-none w-36 | btn btn-lg'
          >Go
          </button>
        </div>
      </div>
    </form>
  )
}

UserSearch.propTypes = {
  onGetUsers: PropTypes.func.isRequired,
  onUISetAlert: PropTypes.func.isRequired
}
