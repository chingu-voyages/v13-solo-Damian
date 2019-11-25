import { USER_LOGOUT, USER_LOGIN } from '../actions/users'

export default function Users (state = {}, action) {
  switch (action.type) {

    case USER_LOGIN:
      return {
        ...action.user
      }

    case USER_LOGOUT:
      return {
        
      }

    default:
      return state
  }
}
