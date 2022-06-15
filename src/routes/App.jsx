import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AlertProvider, GithubProvider } from '../context'
import { Alert, Layout } from '../components'
import { About, Home, NotFound, User } from '../pages'

export function App () {
  return (
    <BrowserRouter>
      <GithubProvider>
        <AlertProvider>
          <Layout>
            <Routes>
              <Route
                path='/' element={
                  <>
                    <Alert />
                    <Home />
                  </>
                }
              />
              <Route path='/about' element={<About />} />
              <Route path='/user/:login' element={<User />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Layout>
        </AlertProvider>
      </GithubProvider>
    </BrowserRouter>
  )
}
