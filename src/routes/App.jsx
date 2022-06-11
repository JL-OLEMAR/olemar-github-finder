import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GithubProvider } from '../context'
import { Layout } from '../components'
import { About, Home } from '../pages'

export function App () {
  return (
    <BrowserRouter>
      <GithubProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route element={<Navigate to='/' />} path='*' /> {/* FIXME: Change to page NotFound */}
          </Routes>
        </Layout>
      </GithubProvider>
    </BrowserRouter>
  )
}
