import { addIssue, receiveIssues, updateIssue } from './issues'
import api from '../helper/API'
// const BASE_URL = 'http://localhost:3030/issues'
export function handleAddIssue (issue) {
  console.log(">> handleAddIssue" + JSON.stringify(issue))
  return (dispatch, getState) => {
    api
      .createPost(issue)
      .then(data => dispatch(addIssue(data)))
      .catch(error => console.log(JSON.stringify(error)))
  }
}

export function handleReceiveIssues (project) {
  return (dispatch, getState) => {
    api
      .getPosts(project)
      .then(data => dispatch(receiveIssues(data)))
      .catch(error => console.log(JSON.stringify(error)))
  }
}
