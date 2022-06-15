import { useReducer, createContext } from 'react'
import { types } from '../../types'
import { alertReducer } from './alertReducer.js'

export const AlertContext = createContext()

const INITIAL_STATE = null

export function AlertProvider ({ children }) {
  const [state, dispatch] = useReducer(alertReducer, INITIAL_STATE)

  // Set an alert
  const setAlert = (msg, type) => {
    dispatch({ type: types.setAlert, payload: { msg, type } })
    setTimeout(() => dispatch({ type: types.removeAlert }), 3000)
  }

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  )
}
