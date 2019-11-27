import { addIssue, receiveIssues } from './issues'
import { update } from './users'
import api from '../helper/IssuesAPI'

export function handleAddIssue (issue, user) {
  return (dispatch, getState) => {
    api
      .createPost(issue, user.accessToken)
      .then(data => dispatch(addIssue(data)))
      .catch(error => console.log(JSON.stringify(error)))
  }
}

export function handleRetrieveAvailableProjects (user) {
  return dispatch => {
    api
      .getProjects(user.accessToken)
      .then(projects => {
        user.availableProjects = projects
        dispatch(update(user))
      })
      .catch(error => console.log(error))
  }
}

export function handleReceiveIssues (user) {
  return (dispatch, getState) => {
    api
      .getPosts(user.defaultProject || 'test', user.accessToken)
      .then(data => dispatch(receiveIssues(data)))
      .catch(error => console.log(JSON.stringify(error)))
  }
}
