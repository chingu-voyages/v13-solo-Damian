import { GET_SETTINGS } from '../actions/settings'

export default function settings (state = {}, action) {
  switch (action.type) {
    case GET_SETTINGS:
      return { ...state, ...action.settings }

    default:
      return state
  }
}
