import * as types from '../actions/actionTypes';  
import initialState from './initialState';

const credentials = (state = initialState.credentials, action) => {  
  switch(action.type) {
    case types.LOAD_CREDENTIALS_SUCCESS:
      return action.credentials
    default: 
      return state;
  }
}

export default credentials
