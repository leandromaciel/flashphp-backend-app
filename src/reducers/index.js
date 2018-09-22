import { combineReducers } from 'redux'

//import of all reducers
import config from './config'
import user from './user'
import dashboard from './dashboard'
import customer from './customer'

const reducers = {
    config,
    user,
    dashboard,
    customer
}

const reducer = combineReducers(reducers)

export default reducer
