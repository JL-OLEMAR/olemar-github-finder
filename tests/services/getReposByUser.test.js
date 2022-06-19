import { getReposByUser } from '../../src/services/getReposByUser.js'

describe('Test the getReposByUser endpoint', () => {
  test('should return user and repos', async () => {
    const { user, repos } = await getReposByUser('facebook')

    expect(repos.length).toBeGreaterThan(0)
    expect(user).toEqual({
      id: expect.any(Number),
      avatar_url: expect.any(String),
      name: expect.any(String),
      login: expect.any(String),
      type: expect.any(String),
      hireable: null,
      bio: expect.any(String),
      html_url: expect.any(String),
      location: expect.any(String),
      blog: expect.any(String),
      twitter_username: expect.any(String),
      followers: expect.any(Number),
      following: expect.any(Number),
      public_repos: expect.any(Number),
      public_gists: expect.any(Number)
    })
  })
})
