import { useReducer, createContext } from 'react'
import { githubReducer } from './githubReducer.js'

export const GithubContext = createContext()

const INITIAL_STATE = {
  users: [],
  user: {},
  repos: []
}

export function GithubProvider ({ children }) {
  const [state, dispatchGithub] = useReducer(githubReducer, INITIAL_STATE)

  return (
    <GithubContext.Provider value={{ state, dispatchGithub }}>
      {children}
    </GithubContext.Provider>
  )
}
