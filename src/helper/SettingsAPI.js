const BASE_URL = process.env.REACT_APP_API_URL

const headers = token => {
  return {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
}
const api = {
  getSettings (token) {
    return fetch(`${BASE_URL}/settings`, {
      method: 'GET',
      headers: headers(token)
    }).then(response => response.json())
  }
}
export default api
