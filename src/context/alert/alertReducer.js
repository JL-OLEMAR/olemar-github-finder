import { types } from '../../types'

export function alertReducer (state, action) {
  switch (action.type) {
    case types.setAlert:
      return action.payload

    case types.removeAlert:
      return null

    default:
      return state
  }
}
