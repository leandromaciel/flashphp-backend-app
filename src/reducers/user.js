import * as actions from '../actions'
import initialState from '../state'

export default function user(state = initialState.user, action) {
    switch (action.type) {
        case actions.REQUEST_USER_LIST:
            return { ...state, loading: true }
        case actions.SUCCESS_USER_LIST:
            return { ...state, list: action.payload.data, loading: false, error: false }
        case actions.FAILURE_USER_LIST:
            return { ...state, list: [], loading: false, error: true }
        
        case actions.REQUEST_USER_LOGIN:
            return { ...state, loading: true }
        case actions.SUCCESS_USER_LOGIN:
            return {...state, credentials: {AUTHORIZED: true}, loading: false, error: false }
        case actions.FAILURE_USER_LOGIN:
            return { ...state, credentials: {AUTHORIZED: false}, loading: false, error: action.payload.data }
            
        case actions.SUCCESS_USER_CREDENTIALS:
            return { ...state, credentials: {AUTHORIZED: true}, loading: false, error: false }
        case actions.FAILURE_USER_CREDENTIALS:
            return { ...state, credentials: {AUTHORIZED: false}, loading: false, error: false }
        
        default:
            return state;
    }
}