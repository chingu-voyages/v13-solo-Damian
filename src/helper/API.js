

const BASE_URL=process.env.REACT_APP_API_URL;
const api = {
  getPosts (project) {
      console.log(">>"  + `${BASE_URL}/${project}`);
    return fetch(`${BASE_URL}/${project}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then(response => response.json())
  },

  getPostsByRef (ref) {
    return fetch(`${BASE_URL}/details/${ref}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then(response => response.json())
  },

  createPost (issue) {
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
export default api
