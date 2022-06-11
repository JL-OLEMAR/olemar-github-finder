import { useReducer, createContext } from 'react'
import { githubReducer } from './githubReducer.js'

export const GithubContext = createContext()

const INITIAL_STATE = {
  users: [],
  user: {},
  repos: [],
  loading: false
}

export function GithubProvider ({ children }) {
  const [state, dispatch] = useReducer(githubReducer, INITIAL_STATE)

  return (
    <GithubContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GithubContext.Provider>
  )
}
