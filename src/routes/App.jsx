import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GithubProvider } from '../context'
import { Layout } from '../components'
import { About, Home, NotFound, User } from '../pages'

export function App () {
  return (
    <BrowserRouter>
      <GithubProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/user/:login' element={<User />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </GithubProvider>
    </BrowserRouter>
  )
}
