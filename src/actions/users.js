export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_UPDATE = 'USER_UPDATE'

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

export function update (user) {
  return {
    type: USER_UPDATE,
    user
  }
}
