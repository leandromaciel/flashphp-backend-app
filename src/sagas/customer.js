import { put, call } from 'redux-saga/effects'
import * as actions from '../actions'
/* import * as api from './api' */
import * as user from './user'

export function* saveCustomerPerson(action) {

  console.log(action.payload.personData)

  /* const config = yield select(state => state.config)
  const customer = yield select(state => state.customer) */
  //const saveUrl = config.baseUrl+customer.savePersonAction
  
  const response = yield call(user.getUserCredentials);

  if ( response.AUTHORIZED !== false ) {
    yield put({ type: actions.REQUEST_SAVE_CUSTOMER_PERSON_SUCCESS, payload: { data: 'usuario inserido com sucesso!' } })
  } else {
    yield put({ type: actions.FAILURE_USER_CREDENTIALS })
  }  

  return response
}