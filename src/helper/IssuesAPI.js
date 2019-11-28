const BASE_URL = process.env.REACT_APP_API_URL

const headers = token => {
  return {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
}
const api = {
  getProjects (token) {
    return fetch(`${BASE_URL}/projects`, {
      method: 'GET',
      headers: headers(token)
    }).then(response => response.json())
  },
  getIssues (project, token) {
    return fetch(`${BASE_URL}/${project}`, {
      method: 'GET',
      headers: headers(token)
    }).then(response => response.json())
  },

  getIssueByRef (ref, token) {
    return fetch(`${BASE_URL}/details/${ref}`, {
      method: 'GET',
      headers: headers(token)
    }).then(response => response.json())
  },
  getComments (ref, token) {
    return fetch(`${BASE_URL}/${ref}/comments`, {
      method: 'GET',
      headers: headers(token)
    }).then(response => response.json())
  },
  createComment (ref, comment, token) {
    return fetch(`${BASE_URL}/${ref}/comments`, {
      method: 'POST',
      headers: {
        ...headers(token),
        ...{ 'Content-Type': 'application/json' }
      },
      body: JSON.stringify(comment)
    }).then(response => response.json())
  },
  createIssue (issue, token) {
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
