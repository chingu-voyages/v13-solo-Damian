const BASE_URL = process.env.REACT_APP_API_URL

const api = {
  register (user) {
    return fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json())
  },
  login (user) {
    return fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json())
  },

  logout (user) {
    return fetch(`${BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: user.email })
    }).then(response => response.json())
  },
  update (user) {
    return fetch(`${BASE_URL}/auth/update-user`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json())
  },

  getUserDetails (email) {
    return fetch(`${BASE_URL}/auth/user/${email}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then(response => response.json())
  }
}

export default api
