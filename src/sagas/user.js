import { put, call, select } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from './api'


export function* getUserCredentials() {

  const config = yield select(state => state.config)
  const user = yield select(state => state.user)

  const listUrl = config.baseUrl+user.listAction

  const credentialsData = {
    USER_LOGIN: localStorage.getItem('USER_LOGIN'),
    CSRF_TOKEN_VALUE: localStorage.getItem('CSRF_TOKEN_VALUE')
  }

  const response = yield call(api.postApi, listUrl, JSON.stringify(credentialsData));

  if ( response.error === true || response.data.AUTHORIZED === false ) {
    if (response.error === true) {
        yield put({ type: actions.FAILURE_NETWORK })
      } else {
        yield put({ type: actions.FAILURE_USER_CREDENTIALS })
      } 
  } else {
    yield put({ type: actions.SUCCESS_NETWORK })
    yield put({ type: actions.SUCCESS_USER_CREDENTIALS })
  }  

  return response
}

export function* getUserList() {
  try {
    
    const response = yield call(getUserCredentials);
    
    if ( response.success === true && response.AUTHORIZED !== false ) {
      yield put({ type: actions.SUCCESS_NETWORK })
      yield put({ type: actions.SUCCESS_USER_LIST, payload: { data: response } })
    }
  } catch (err) {
    yield put({ type: actions.FAILURE_NETWORK })
  }
}


export function* doLogin(action) {
  try {
    const config = yield select(state => state.config)
    const user = yield select(state => state.user)
    const loginUrl = config.baseUrl+user.loginAction
    
    const response = yield call(api.postApi, loginUrl, JSON.stringify(action.payload.loginData))

    if ( response.error === true || response.data.AUTHORIZED === false ) {
      if (response.error === true) {
        yield put({ type: actions.FAILURE_NETWORK })
      } else {
        yield put({ type: actions.FAILURE_USER_LOGIN, payload: { data: response.error_message } })
      }  
    } else {
      yield put({ type: actions.SUCCESS_NETWORK })
      localStorage.setItem('USER_LOGIN', response.USER_LOGIN)
      localStorage.setItem('CSRF_TOKEN_VALUE', response.CSRF_TOKEN_VALUE)
      yield put({ type: actions.SUCCESS_USER_LOGIN })
    }
  } catch (err) {
    yield put({ type: actions.FAILURE_NETWORK })
  }
}