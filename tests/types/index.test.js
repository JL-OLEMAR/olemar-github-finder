import { types } from '../../src/types'

describe('Tests in "types" of the reducers', () => {
  test('should match the types', () => {
    expect(types).toEqual({
      githubGetUsers: '[Github] Get users',
      githubGetReposByUser: '[Github] Get repos by User',
      githubClearUsers: '[Github] Clear users',

      uiSetAlert: '[UI] Set Alert',
      uiRemoveAlert: '[UI] Remove Alert',
      uiStartLoading: '[UI] Start loading',
      uiFinishLoading: '[UI] Finish loading'
    })
  })
})
