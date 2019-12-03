import {
  ADD_ISSUE,
  RECEIVE_ISSUES,
  UPDATE_ISSUE,
  DELETE_ISSUE
} from '../actions/issues'

export default function Issues (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ISSUES:
      const newState = {}
      action.issues.forEach(element => {
        newState[element._id] = element
      })
      return newState

    case ADD_ISSUE:
      return {
        ...state,
        ...{ [action.issue._id]: action.issue }
      }

    case UPDATE_ISSUE:
      const updateNewState = { ...state }
      updateNewState[action.issue._id] = action.issue
      return updateNewState
    case DELETE_ISSUE:
      const deleteNewState = { ...state }
      delete deleteNewState[action.issue._id]
      return deleteNewState
    default:
      return state
  }
}
