export function About() {
  return (
    <>
      <h1 className='mb-4 text-6xl'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className='text-lg text-gray-400'>
        Version: <span className='text-gray-400'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Developed by:{' '}
        <a
          className='text-gray-400'
          href='https://github.com/JL-OLEMAR/'
          rel='noreferrer'
          target='_blank'
        >
          JL-OLEMAR
        </a>
      </p>
    </>
  )
}
