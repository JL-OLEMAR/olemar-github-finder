import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GithubProvider, UIProvider } from '../context'
import { Alert, Layout } from '../components'
import { About, Home, NotFound, User } from '../pages'

export function App() {
  return (
    <GithubProvider>
      <UIProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route
                element={
                  <>
                    <Alert />
                    <Home />
                  </>
                }
                path='/'
              />
              <Route element={<About />} path='/about' />
              <Route element={<User />} path='/user/:login' />
              <Route element={<NotFound />} path='/notfound' />
              <Route element={<NotFound />} path='*' />
            </Routes>
          </Layout>
        </BrowserRouter>
      </UIProvider>
    </GithubProvider>
  )
}
