import { types } from '../../types'

export function githubReducer(state, action) {
  switch (action.type) {
    case types.githubGetUsers:
      return {
        ...state,
        users: action.payload
      }

    case types.githubGetReposByUser:
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos
      }

    case types.githubClearUsers:
      return {
        ...state,
        users: []
      }

    default:
      return state
  }
}
