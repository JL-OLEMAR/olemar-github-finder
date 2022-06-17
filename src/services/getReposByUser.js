/* eslint-disable camelcase */
import { axiosConfig } from './settings.js'

export const getReposByUser = async (loginReq) => {
  const [user, repos] = await Promise.all([
    axiosConfig.get(`/users/${loginReq}`),
    axiosConfig.get(`/users/${loginReq}/repos`)
  ])

  if (Object.keys(user.data).length === 0) return {}
  const userData = {
    id: user.data.id,
    avatar_url: user.data.avatar_url,
    name: user.data.name,
    login: user.data.login,
    type: user.data.type,
    hireable: user.data.hireable,
    bio: user.data.bio,
    html_url: user.data.html_url,
    location: user.data.location,
    blog: user.data.blog,
    twitter_username: user.data.twitter_username,
    followers: user.data.followers,
    following: user.data.following,
    public_repos: user.data.public_repos,
    public_gists: user.data.public_gists
  }

  if (!Array.isArray(repos.data)) return []
  const reposData = repos.data.map((repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    watchers_count: repo.watchers_count,
    stargazers_count: repo.stargazers_count,
    open_issues: repo.open_issues,
    forks: repo.forks,
    created_at: repo.created_at
  }))

  return { user: userData, repos: reposData }
}
