import { axiosConfig } from './settings.js'

export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text })
  const response = await axiosConfig.get(`/search/users?${params}`)
  return response.data.items
}
