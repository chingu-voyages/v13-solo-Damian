import { signOut, logIn, update } from './users'
import api from '../helper/UserAPI'
import {
  handleReceiveIssues,
  handleRetrieveAvailableProjects
} from './issueActionsCreator'
import { handleGetSettings } from './settings'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleLogout () {
  return (dispatch, getState) => {
    localStorage.removeItem('email')
    localStorage.removeItem('accessToken')

    const user = getState().user
    api
      .logout(user.email)
      .then(user => dispatch(signOut(user)))
      .catch(error => console.error(error))
  }
}

export function handleUpdate (user) {
  return dispatch => {
    api
      .update(user)
      .then(() => dispatch(update(user)))
      .catch(error => console.error(error))
  }
}

function handleGetUserDetails () {
  return (dispatch, getState) => {
    const user = getState().user
    api
      .getUserDetails(user.email)
      .then(user => dispatch(update(user)))
      .catch(error => console.error(error))
  }
}
export function handleRegister (user) {
  return dispatch => {
    api
      .register(user)
      .then(() => dispatch(update(user)))
      .catch(error => console.error(error))
  }
}

export function handleLogin (user) {
  return dispatch => {
    dispatch(showLoading())

    api.login(user).then(data => {
      localStorage.setItem('email', data.email)
      localStorage.setItem('accessToken', data.accessToken)
      dispatch(logIn({ ...user, ...data }))
      dispatch(handleGetUserDetails())
      dispatch(handleRetrieveAvailableProjects())
      dispatch(handleReceiveIssues())
      dispatch(handleGetSettings())
      dispatch(hideLoading())
    })
  }
}

export function handleRestoreSession (user) {
  return dispatch => {
    dispatch(showLoading())
    dispatch(logIn(user))
    dispatch(handleGetUserDetails())
    dispatch(handleRetrieveAvailableProjects())
    dispatch(handleReceiveIssues())
    dispatch(handleGetSettings())
    dispatch(hideLoading())
  }
}
