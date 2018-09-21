import { put, call, select } from 'redux-saga/effects'
import axios from 'axios'
import * as actions from '../actions'

function postApi(url, loginData) {
  return axios.post(url, loginData)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    return error.data
  });
}

export function* getUserCredentials() {

  const user = yield select(state => state.user)
  const listUrl = user.baseUrl+user.listUrlAction
  
  const credentialsData = {
    USER_LOGIN: localStorage.getItem('USER_LOGIN'),
    CSRF_TOKEN_VALUE: localStorage.getItem('CSRF_TOKEN_VALUE')
  }

  const response = yield call(postApi, listUrl, JSON.stringify(credentialsData));

  if ( response.AUTHORIZED === false ) {
    yield put({ type: actions.FAILURE_USER_CREDENTIALS })
  } else {
    yield put({ type: actions.SUCCESS_USER_CREDENTIALS })
  }  

  return response
}

export function* getUserList() {
  try {
    const response = yield call(getUserCredentials);
    
    if ( response.AUTHORIZED !== false ) {
      yield put({ type: actions.SUCCESS_USER_LIST, payload: { data: response } })
    }
  } catch (err) {
    yield put({ type: actions.FAILURE_USER_LIST })
  }
}


export function* doLogin(action) {
  try {
    const url = yield select(state => state.user)
    const loginUrl = url.baseUrl+url.loginUrlAction
    
    const response = yield call(postApi, loginUrl, JSON.stringify(action.payload.loginData))

    if ( response.AUTHORIZED === false ) {
      yield put({ type: actions.FAILURE_USER_LOGIN, payload: { data: response.error_message } })
      yield put({ type: actions.FAILURE_USER_CREDENTIALS })  
    } else {
      localStorage.setItem('USER_LOGIN', response.USER_LOGIN)
      localStorage.setItem('CSRF_TOKEN_VALUE', response.CSRF_TOKEN_VALUE)
      yield put({ type: actions.SUCCESS_USER_LOGIN })
    }
  } catch (err) {
    yield put({ type: actions.FAILURE_USER_LOGIN })
  }
}