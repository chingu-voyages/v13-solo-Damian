import { addComment, receiveComments, deleteComment } from './comments'
import api from '../helper/IssuesAPI'

export function handleCreateComment (comment) {
  return (dispatch, getState) => {
    const user = getState().user
    api
      .createComment(comment.issue, comment, user.accessToken)
      .then(data => dispatch(addComment(data)))
      .catch(error => console.log(JSON.stringify(error)))
  }
}

export function handleDeleteComment (commentId) {
  return (dispatch, getState) => {
    const user = getState().user
    api
      .deleteComment(commentId, user.accessToken)
      .then(() => dispatch(deleteComment(commentId)))
      .catch(error => console.log(JSON.stringify(error)))
  }
}
export function handleReceiveComments (ref) {
  return (dispatch, getState) => {
    const user = getState().user
    api
      .getComments(ref, user.accessToken)
      .then(data => dispatch(receiveComments(data)))
      .catch(error => console.log(JSON.stringify(error)))
  }
}
