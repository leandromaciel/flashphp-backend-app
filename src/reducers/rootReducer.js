import { combineReducers } from 'redux'
import config from './configReducer'
import credentials from './credentialsReducer'

const rootReducer = combineReducers({
    config,
    credentials
})

export default rootReducer
