import { searchUsers } from '../../src/services/searchUsers'

describe('Test the searchUsers endpoint', () => {
  test('should return an array of users', async () => {
    const users = await searchUsers('facebook')

    expect(users.length).toBeGreaterThan(0)
    expect(users[0]).toEqual({
      id: expect.any(Number),
      login: expect.any(String),
      avatar_url: expect.any(String)
    })
  })
})
