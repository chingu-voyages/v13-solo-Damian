import { signOut, logIn, update } from './users'
import api from '../helper/UserAPI'
import {
  handleReceiveIssues,
  handleRetrieveAvailableProjects
} from './issueActionsCreator'
import {handleGetSettings} from './settings'

export function handleLogout () {
  return (dispatch, getState) => {
    const user = getState().user
    api
      .logout(user.email)
      .then(user => dispatch(signOut(user)))
      .catch(error => console.log(error))
  }
}

export function handleUpdate (user) {
  return dispatch => {
    api
      .update(user)
      .then(() => dispatch(update(user)))
      .catch(error => console.log(error))
  }
}

function handleGetUserDetails () {
  return (dispatch, getState) => {
    const user = getState().user
    api
      .getUserDetails(user.email)
      .then(user => dispatch(update(user)))
      .catch(error => console.log(error))
  }
}
export function handleRegister (user) {
  return dispatch => {
    api
      .register(user)
      .then(() => dispatch(update(user)))
      .catch(error => console.log(error))
  }
}

export function handleLogin (user) {
  return dispatch => {
    api.login(user).then(data => {
      dispatch(logIn({ ...user, ...data }))
      dispatch(handleGetUserDetails())
      dispatch(handleRetrieveAvailableProjects())
      dispatch(handleReceiveIssues())
      dispatch(handleGetSettings())
    })
  }
}
