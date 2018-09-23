import { put, call } from 'redux-saga/effects'
import * as actions from '../actions'
/* import * as api from './api' */
import * as user from './user'


export function* saveCustomerPerson(action) {

  console.log(action.payload.personData)
  
  const response = yield call(user.getUserCredentials);

  if ( response.AUTHORIZED !== false ) {
    yield put({ type: actions.REQUEST_SAVE_CUSTOMER_PERSON_SUCCESS, payload: { data: 'usuario inserido com sucesso!' } })
  } else {
    yield put({ type: actions.FAILURE_USER_CREDENTIALS })
  }  

  return response
}

export function* saveCustomerCompany(action) {

  console.log(action.payload.personData)
  console.log('agora vem a empresa')
  console.log(action.payload.companyData)
  
  const response = yield call(user.getUserCredentials);

  if ( response.AUTHORIZED !== false ) {
    yield put({ type: actions.REQUEST_SAVE_CUSTOMER_COMPANY_SUCCESS, payload: { data: 'usuario inserido com sucesso!' } })
  } else {
    yield put({ type: actions.FAILURE_USER_CREDENTIALS })
  }  

  return response
}