export const ADD_COMMENT = 'ADD_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function deleteComment (comment) {
  return {
    type: DELETE_COMMENT,
    comment
  }
}

export function receiveComments (comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}
