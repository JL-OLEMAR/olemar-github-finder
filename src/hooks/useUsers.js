import { useContext } from 'react'

import { searchUsers } from '../services'
import { GithubContext, UIContext } from '../context'
import { types } from '../types'

export function useUsers () {
  const { state: { users }, dispatchGithub } = useContext(GithubContext)
  const { ui: { loading }, dispatchUI } = useContext(UIContext)

  const handleSearchSubmit = async (searchedText) => {
    dispatchUI({ type: types.uiStartLoading })

    try {
      const userSearch = await searchUsers(searchedText)
      dispatchGithub({ type: types.githubGetUsers, payload: userSearch })
      dispatchUI({ type: types.uiFinishLoading })
    } catch (error) {
      dispatchUI({ type: types.uiFinishLoading })
      console.log('error', error)
    }
  }

  const handleSetAlert = (msg, type) => {
    dispatchUI({ type: types.uiSetAlert, payload: { msg, type } })
    setTimeout(() => dispatchUI({ type: types.uiRemoveAlert }), 3000)
  }

  const handleClearUsers = () => {
    dispatchGithub({ type: types.githubClearUsers })
  }

  return {
    users,
    loading,
    handleSearchSubmit,
    handleSetAlert,
    handleClearUsers
  }
}
