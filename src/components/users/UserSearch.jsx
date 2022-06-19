import PropTypes from 'prop-types'

import { useForm } from '../../hooks'

export function UserSearch({ onUISetAlert, onGetUsers }) {
  const [{ search }, handleInputChange, onResetForm] = useForm({ search: '' })

  const onSearchSubmit = async (evt) => {
    evt.preventDefault()
    if (search.trim() === '')
      return onUISetAlert('Please enter something', 'error')

    onResetForm()
    await onGetUsers(search.trim())
  }

  return (
    <form aria-label='form' onSubmit={onSearchSubmit}>
      <div className='form-control'>
        <div className='relative'>
          <input
            className='w-full pr-40 input input-lg bg-gray-200 text-black'
            name='search'
            placeholder='Search Users...'
            type='text'
            value={search}
            onChange={handleInputChange}
          />

          <button
            className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
            type='submit'
          >
            Go
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
