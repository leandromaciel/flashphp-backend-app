import { combineReducers } from 'redux'

//import of all reducers
import user from './user'
import dashboard from './dashboard'

const reducers = {
    user,
    dashboard
}

const reducer = combineReducers(reducers)

export default reducer
