import { axiosConfig } from './settings.js'

export const getReposByUser = async (login) => {
  const [user, repos] = await Promise.all([
    axiosConfig.get(`/users/${login}`),
    axiosConfig.get(`/users/${login}/repos`)
  ])

  return { user: user.data, repos: repos.data }
}
