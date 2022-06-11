import { types } from '../../types'

export function githubReducer (state, action) {
  switch (action.type) {
    case types.getUsers:
      return {
        ...state,
        users: action.payload,
        loading: false
      }

    case types.getReposByUser:
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false
      }

    case types.setLoading:
      return {
        ...state,
        loading: true
      }

    case types.clearUsers:
      return {
        ...state,
        users: []
      }

    default:
      return state
  }
}
