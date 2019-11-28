export const ADD_COMMENT = 'ADD_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function receiveComments (comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}
