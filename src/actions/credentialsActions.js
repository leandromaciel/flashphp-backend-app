import * as types from './actionTypes'
import credentialsApi from '../api/credentialsApi';

export function loadCredentials() {  
  return function(dispatch) {
    return credentialsApi.getCredentials().then(credentials => {
      dispatch(loadCredentialsSuccess(credentials))
    }).catch(error => {
      throw(error)
    })
  }
}

export function loadCredentialsSuccess(credentials) {
    console.log(credentials)  
    return {type: types.LOAD_CREDENTIALS_SUCCESS, credentials}
}