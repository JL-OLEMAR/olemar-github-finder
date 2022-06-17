import spinner from './assets/spinner.gif'

export function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img
        alt='Loading...'
        className='mx-auto text-center'
        src={spinner}
        width={180}
      />
    </div>
  )
}
