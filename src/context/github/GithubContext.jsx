import { useReducer, createContext } from 'react'
import { githubReducer } from './githubReducer.js'

export const GithubContext = createContext()

const INITIAL_STATE = {
  users: [],
  user: {},
  repos: []
}

const lazyInit = () => {
  return JSON.parse(window.localStorage.getItem('github')) || INITIAL_STATE
}

export function GithubProvider ({ children }) {
  const [state, dispatchGithub] = useReducer(githubReducer, INITIAL_STATE, lazyInit)

  return (
    <GithubContext.Provider value={{ state, dispatchGithub }}>
      {children}
    </GithubContext.Provider>
  )
}
