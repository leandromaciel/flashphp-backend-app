import * as actions from '../actions'
import initialState from '../state'

export default function config(state = initialState.config, action) {
    switch(action.type) {
        case actions.FAILURE_NETWORK:
            return { ...state, networkError: true }
        case actions.SUCCESS_NETWORK:
            return { ...state, networkError: false}
        case actions.FAILURE_GENERIC:
            return { ...state, genericError: true}
        case actions.SUCCESS_GENERIC:
            return { ...state, genericError: false}    
        default:
            return state
    }
}