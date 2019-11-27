import { ADD_ISSUE, RECEIVE_ISSUES, UPDATE_ISSUE } from '../actions/issues'

export default function Issues (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ISSUES:
      const newState = {}
      action.issues.forEach(element => {
        newState[element._id] = element
      })
      return {
        ...state,
        ...newState
      }

    case ADD_ISSUE:
      return {
        ...state,
        ...{ [action.issue._id]: action.issue }
      }

    case UPDATE_ISSUE:
      return {
        ...state,
        ...(state[action.issue._id] = action.issue)
      }
    default:
      return state
  }
}