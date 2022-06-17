import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import { getReposByUser } from '../services'
import { GithubContext, UIContext } from '../context'
import { types } from '../types'

export function useSingleUser() {
  const { state, dispatchGithub } = useContext(GithubContext)
  const { ui: { loading }, dispatchUI } = useContext(UIContext) // eslint-disable-line
  const params = useParams()
  const { user, repos } = state

  useEffect(() => {
    dispatchUI({ type: types.uiStartLoading })

    const getUser = async () => {
      const data = await getReposByUser(params.login)

      dispatchGithub({ type: types.githubGetReposByUser, payload: data })
      dispatchUI({ type: types.uiFinishLoading })
    }

    getUser()
  }, [params.login, dispatchGithub, dispatchUI])

  useEffect(() => {
    window.localStorage.setItem('github', JSON.stringify(state))
  }, [state])

  const latestRepos = repos.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )

  const websiteUrl = user.blog?.startsWith('http')
    ? user.blog
    : `https://${user.blog}`

  return { user, loading, latestRepos, websiteUrl }
}
