import { USER_LOGOUT, USER_LOGIN, USER_UPDATE } from '../actions/users'

export default function user (state = {}, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, ...action.user }

    case USER_LOGOUT:
      return {}

    case USER_UPDATE:
      return { ...state, ...action.user }

    default:
      return state
  }
}
