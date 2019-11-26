const BASE_URL = process.env.REACT_APP_API_URL

const headers = token => {
  return {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
}
const api = {
  getPosts (project, token) {
    return fetch(`${BASE_URL}/${project}`, {
      method: 'GET',
      headers: headers(token)
    }).then(response => response.json())
  },

  getPostsByRef (ref, token) {
    return fetch(`${BASE_URL}/details/${ref}`, {
      method: 'GET',
      headers: headers(token)
    }).then(response => response.json())
  },

  createPost (issue, token) {
    return fetch(`${BASE_URL}/${issue.project}`, {
      method: 'POST',
      headers: {
        ...headers(token),
        ...{ 'Content-Type': 'application/json' }
      },
      body: JSON.stringify(issue)
    }).then(response => response.json())
  }
}
export default api
