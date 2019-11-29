import {
  ADD_COMMENT,
  RECEIVE_COMMENTS,
  DELETE_COMMENT
} from '../actions/comments'

export default function comments (state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return {
        ...state,
        ...action.comments
      }

    case ADD_COMMENT:
      return {
        ...state,
        ...action.comment
      }
    case DELETE_COMMENT:
      const copyOfState = Object.values(state).filter(
        c => c._id !== c.action.commentId
      )
      return copyOfState

    default:
      return state
  }
}
