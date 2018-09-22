import * as actions from '../actions'
import initialState from '../state'

export default function config(state = initialState.config, action) {
    switch(action.type) {
        case actions.FAILURE_NETWORK:
            return { ...state, networkError: true }
        case actions.SUCCESS_NETWORK:
            return { ...state, networkError: false}
        default:
            return state
    }
}