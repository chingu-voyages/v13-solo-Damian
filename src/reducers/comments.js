import {
  ADD_COMMENT,
  RECEIVE_COMMENTS,
  DELETE_COMMENT
} from '../actions/comments'

export default function comments (state = {}, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      const newState = {}
      action.comments.forEach(element => {
        newState[element._id] = element
      })
      return newState

    case ADD_COMMENT:
      return {
        ...state,
        ...{ [action.comment._id]: action.comment }
      }
    case DELETE_COMMENT:
      const deleteNewState = { ...state }
      delete deleteNewState[action.comment._id]
      return deleteNewState

    default:
      return state
  }
}
