import { useReducer, createContext } from 'react'
import { uiReducer } from './uiReducer.js'

export const UIContext = createContext()

const INITIAL_STATE = {
  alert: null,
  loading: false
}

export function UIProvider ({ children }) {
  const [state, dispatchUI] = useReducer(uiReducer, INITIAL_STATE)

  return (
    <UIContext.Provider value={{ ui: state, dispatchUI }}>
      {children}
    </UIContext.Provider>
  )
}
