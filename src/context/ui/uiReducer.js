import { types } from '../../types'

export function uiReducer(state, action) {
  switch (action.type) {
    case types.uiSetAlert:
      return {
        ...state,
        alert: action.payload
      }

    case types.uiRemoveAlert:
      return {
        ...state,
        alert: null
      }

    case types.uiStartLoading:
      return {
        ...state,
        loading: true
      }

    case types.uiFinishLoading:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}
