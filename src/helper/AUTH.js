const BASE_URL=process.env.REACT_APP_AUTH_API_URL;
const api = {

    register (user) {
        return fetch(`${BASE_URL}/register`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        }).then(response => response.json())
      },
  login (user) {
    return fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }).then(response => response.json())
  },
  
  logout (issue) {
    return fetch(`${BASE_URL}/${issue.project}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(issue)
    }).then(response => response.json())
  }


  
}

export default  api;