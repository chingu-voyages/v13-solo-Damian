import { addComment, receiveComments, deleteComment } from './comments'
import api from '../helper/IssuesAPI'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleCreateComment (comment) {
  return (dispatch, getState) => {
    const user = getState().user
    api
      .createComment(comment.issue, comment, user.accessToken)
      .then(comment => dispatch(addComment(comment)))
      .catch(error => console.error(JSON.stringify(error)))
  }
}

export function handleDeleteComment (comment) {
  return (dispatch, getState) => {
    const user = getState().user
    api
      .removeComment(comment._id, user.accessToken)
      .then(() => dispatch(deleteComment(comment)))
      .catch(error => console.error(JSON.stringify(error)))
  }
}
export function handleReceiveComments (ref) {
  return (dispatch, getState) => {
    dispatch(showLoading())

    const user = getState().user
    api
      .getComments(ref, user.accessToken)
      .then(data => {
        dispatch(receiveComments(data))
        dispatch(hideLoading())
      })
      .catch(error => console.error(JSON.stringify(error)))
  }
}
