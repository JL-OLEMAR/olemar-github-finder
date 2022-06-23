import { githubReducer } from '../../../src/context/github/githubReducer.js'
import { types } from '../../../src/types'

describe('Tests in githubReducer', () => {
  const initialState = {
    users: [],
    user: {},
    repos: []
  }

  test('should return the initial state', () => {
    const newState = githubReducer(initialState, {})

    expect(newState).toBe(initialState)
  })

  test('should get the users', () => {
    const action = {
      type: types.githubGetUsers,
      payload: {
        id: 6128107,
        login: 'vuejs',
        avatar_url: 'https://avatars.githubusercontent.com/u/6128107?v=4'
      }
    }
    const newState = githubReducer(initialState, action)

    expect(newState.users).toEqual(action.payload)
  })

  test('should get Repos by User', () => {
    const action = {
      type: types.githubGetReposByUser,
      payload: {
        user: {
          avatar_url: 'https://avatars.githubusercontent.com/u/6128107?v=4',
          bio: null,
          blog: 'https://vuejs.org',
          followers: 0,
          following: 0,
          hireable: null,
          html_url: 'https://github.com/vuejs',
          id: 6128107,
          location: 'All Over the World',
          login: 'vuejs',
          name: 'vuejs',
          public_gists: 0,
          public_repos: 117,
          twitter_username: null,
          type: 'Organization'
        },
        repos: {
          created_at: '2022-01-04T12:52:17Z',
          description:
            'Snapshots of the generated templates of `npm init vue@3`',
          forks: 3,
          html_url: 'https://github.com/vuejs/create-vue-templates',
          id: 444417853,
          name: 'create-vue-templates',
          open_issues: 0,
          stargazers_count: 13,
          watchers_count: 13
        }
      }
    }

    const newState = githubReducer(initialState, action)

    expect(newState.user).toEqual(action.payload.user)
    expect(newState.repos).toEqual(action.payload.repos)
  })

  test('should empty array of users', () => {
    const action = { type: types.githubClearUsers }
    const newState = githubReducer(initialState, action)

    expect(newState.users).toEqual([])
  })
})
