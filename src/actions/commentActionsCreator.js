import { addComment, receiveComments } from './comments'
import api from '../helper/IssuesAPI'

export function handleCreateComment (comment, user) {
  return (dispatch, getState) => {
    console.log('getState: ' + JSON.stringify(getState().user))
    api
      .createComment(comment.issue, comment, user.accessToken)
      .then(data => dispatch(addComment(data)))
      .catch(error => console.log(JSON.stringify(error)))
  }
}

export function handleReceiveComments (ref, user) {
  return (dispatch, getState) => {
    console.log('getState: ' + JSON.stringify(getState().user))
    api
      .getComments(ref, user.accessToken)
      .then(data => dispatch(receiveComments(data)))
      .catch(error => console.log(JSON.stringify(error)))
  }
}
