import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GithubProvider, UIProvider } from '../context'
import { Alert, Layout } from '../components'
import { About, Home, NotFound, User } from '../pages'

export function App () {
  return (
    <GithubProvider>
      <UIProvider>
        <BrowserRouter>
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
        </BrowserRouter>
      </UIProvider>
    </GithubProvider>
  )
}
