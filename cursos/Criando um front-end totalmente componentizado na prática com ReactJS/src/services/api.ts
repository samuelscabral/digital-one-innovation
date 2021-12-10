/* eslint-disable camelcase */
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/'
})

export interface GithubState {
  hasUser: boolean,
  loading: boolean,
  user: {
    id?: string,
    avatar?: string,
    login?: string,
    name?: string,
    html_url?: string,
    blog?: string,
    company?: string,
    location?: string,
    followers: number,
    following: number,
    public_gists: number,
    public_repos: number,
  },
  repositories: GithubRepository[],
  starred: GithubRepository[],
}

export interface GithubRepository {
  id: string,
  name: string,
  full_name: string,
  html_url: string,
}

export default api
