import * as actions from '../actions'
import initialState from '../state'

export default function dashboard(state = initialState.dashboard, action) {
    switch (action.type) {
        case actions.REQUEST_DASHBOARD_DATA:
            return state;
        default:
            return state;
    }
}