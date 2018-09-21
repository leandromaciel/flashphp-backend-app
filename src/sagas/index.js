import { all, takeLatest } from 'redux-saga/effects'
import * as userSagas from './user' 
import * as actions from '../actions'

export default function* root() {
  yield all([
    takeLatest(actions.REQUEST_USER_LIST, userSagas.getUserList),
    takeLatest(actions.REQUEST_USER_LOGIN, userSagas.doLogin),
    takeLatest(actions.REQUEST_USER_CREDENTIALS, userSagas.getUserCredentials)
  ])
}