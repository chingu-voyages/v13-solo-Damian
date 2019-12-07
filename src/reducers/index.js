import { combineReducers } from 'redux'
import user from './users'
import issues from './issues'
import comments from './comments'
import settings from './settings'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({   
    user,
    issues,
    comments,
    settings,
    loadingBar: loadingBarReducer
})

