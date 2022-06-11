import axios from 'axios'

const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN

export const axiosConfig = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `Bearer ${GITHUB_TOKEN}` }
})
