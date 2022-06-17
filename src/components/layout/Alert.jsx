import { useContext } from 'react'

import { UIContext } from '../../context'

export function Alert() {
  const { ui: { alert } } = useContext(UIContext) // eslint-disable-line

  return (
    <div
      className='grid grid-cols-1 tablet:grid-cols-2 gap-8 mb-4 laptop:grid-cols-2 desktop:grid-cols-2'
      style={{ visibility: alert ? 'visible' : 'hidden' }}
    >
      <div className='alert alert-error'>
        <div>
          <svg
            className='w-6 h-6 stroke-current mr-3'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
            />
          </svg>
          <strong>{alert?.msg}</strong>
        </div>
      </div>
    </div>
  )
}
