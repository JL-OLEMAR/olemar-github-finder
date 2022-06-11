import { Footer } from './Footer.jsx'
import { Navbar } from './Navbar.jsx'

export function Layout ({ children }) {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />

      <main className='container mx-auto px-3 pb-12'>
        {children}
      </main>

      <Footer />
    </div>
  )
}
