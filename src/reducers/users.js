import { REGISTER_USER, USER_LOGIN } from '../actions/users'

export default function Users (state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state
      }

    case USER_LOGIN:
      return {
        ...state
      }

    case USER_LOGOUT:
      return {
        ...state
      }

    default:
      return state
  }
}
