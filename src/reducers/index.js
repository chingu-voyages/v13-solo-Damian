import { combineReducers } from 'redux'
import users from './users'
import issues from './issues'
// import { loadingBarReducer} from 'react-redux-loading'

export default combineReducers({   
    user: users,
    issues
})

