import { addIssue, receiveIssues, updateIssue } from './issues'

const BASE_URL = 'http://localhost:3030/issues'
export function handleAddIssue (issue) {
  return (dispatch, getState) => {
    fetch(`${BASE_URL}/${issue.project}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(issue)
    })
      .then(response => response.json())
      .then(data => dispatch(addIssue(data)))
      .catch(error => console.log(JSON.stringify(error)))
  }
}

export function handleReceiveIssues (project) {
  return (dispatch, getState) => {
    fetch(`${BASE_URL}/${project}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => {
        return response.json()
      })
      .then(data => dispatch(receiveIssues(data)))
      .catch(error => console.log(JSON.stringify(error)))
  }
}
