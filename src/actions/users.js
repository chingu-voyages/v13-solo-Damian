export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_LOGIN = 'USER_LOGIN'


// import { USER_LOGOUT, USER_LOGIN } from '../actions/users'


export function logIn (user) {
  return {
    type: USER_LOGIN,
    user
  }
}

export function signOut (user) {
  return {
    type: USER_LOGOUT,
    user
  }
}
