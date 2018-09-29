import * as actions from '../actions'
import initialState from '../state'

export default function customer(state = initialState.customer, action) {
    switch (action.type) {
        case actions.REQUEST_SAVE_CUSTOMER_PERSON:
            return { ...state, loading: true }
        case actions.REQUEST_SAVE_CUSTOMER_PERSON_SUCCESS:
            return {...state, loading: false, error: false, success: action.payload.data }
        case actions.REQUEST_SAVE_CUSTOMER_PERSON_FAILURE:
            return { ...state, loading: false, error: action.payload.data }

        case actions.REQUEST_SAVE_CUSTOMER_COMPANY:
            return { ...state, loading: true }
        case actions.REQUEST_SAVE_CUSTOMER_COMPANY_SUCCESS:
            return {...state, loading: false, error: false, success: action.payload.data }
        case actions.REQUEST_SAVE_CUSTOMER_COMPANY_FAILURE:
            return { ...state, loading: false, error: action.payload.data }

        case actions.REQUEST_SAVE_CUSTOMER:
            return { ...state, loading: true }
        case actions.REQUEST_SAVE_CUSTOMER_SUCCESS:
            return {...state, loading: false, error: false, success: action.payload.data }
        case actions.REQUEST_SAVE_CUSTOMER_FAILURE:
            return { ...state, loading: false, error: action.payload.data }

        
        default:
            return state;
    }
}