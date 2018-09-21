import * as action from './index'

export function requestUserList() {
  return {
    type: action.REQUEST_USER_LIST
  }
}

export function requestUserLogin(loginData) {
  return {
    type: action.REQUEST_USER_LOGIN,
    payload: {
      loginData
    }
  }
}

export function requestUserCredentials() {
  return {
    type: action.REQUEST_USER_CREDENTIALS
  }
}