/* eslint-disable camelcase */
import { axiosConfig } from './settings.js'

// Promise
// const fromApiResponseToUsers = ({ data: { items } }) => {
//   if (!Array.isArray(items)) return []
//   return items.map(({ id, login, avatar_url }) => ({ id, login, avatar_url }))
// }

// export function searchUsers (text) {
//   const params = new URLSearchParams({ q: text })
//   return axiosConfig.get(`/search/users?${params}`)
//     .then(fromApiResponseToUsers)
// }

// Async/Await
export async function searchUsers (text) {
  const params = new URLSearchParams({ q: text })
  const { data } = await axiosConfig.get(`/search/users?${params}`)

  if (!Array.isArray(data.items)) return []
  return data.items.map(({ id, login, avatar_url }) => ({ id, login, avatar_url }))
}
