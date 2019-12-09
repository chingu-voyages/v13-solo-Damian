import api from '../helper/SettingsAPI'
export const GET_SETTINGS = 'GET_SETTINGS'

export function getSettings (settings) {
  return {
    type: GET_SETTINGS,
    settings
  }
}

export function handleGetSettings () {
  return (dispatch, getState) => {
    const user = getState().user
    api
      .getSettings(user.accessToken)
      .then(data => {
        dispatch(getSettings(data))
        return data
      })
      .catch(error => console.error(error))
  }
}
