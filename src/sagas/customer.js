import { put, call } from 'redux-saga/effects'
import * as actions from '../actions'
/* import * as api from './api' */
import * as user from './user'


export function cleanLocalStorage() {
  localStorage.removeItem('customerPerson')
  localStorage.removeItem('customerCompany')
  return true
}

export function* saveCustomer(action) {

  const response = yield call(user.getUserCredentials);

  if ( response.AUTHORIZED !== false ) {
    let customerDB = JSON.parse(localStorage.getItem('customerDB'))
    const customerData = {...action.payload.personData, ...action.payload.companyData}

    if ( customerDB === null ) {
      customerDB = [customerData]
    } else {
      customerDB.push(customerData)
    }

    localStorage.setItem('customerDB', JSON.stringify(customerDB))

    yield put({ type: actions.REQUEST_SAVE_CUSTOMER_SUCCESS, payload: { data: 'dados gravados com sucesso!' } })
    yield call(cleanLocalStorage)
  } else {
    yield put({ type: actions.FAILURE_USER_CREDENTIALS })
  }  

  return response
}

export function* saveCustomerPerson(action) {
  
  const response = yield call(user.getUserCredentials);

  if ( response.AUTHORIZED !== false ) {

    const customerData = {...action.payload.personData, ...action.payload.companyData}
    console.log(customerData)

    /* if ( response.AUTHORIZED !== false ) {
      let customerDB = JSON.parse(localStorage.getItem('customerDB'))
  
      if ( customerPersonDB === null ) {
        customerDB = [action.payload.companyData]
      } else {
        customerDB.push(action.payload.companyData)
      }
  
      localStorage.setItem('customerPersonDB', JSON.stringify(customerDB))
    yield put({ type: actions.REQUEST_SAVE_CUSTOMER_COMPANY_SUCCESS, payload: { data: 'dados gravados com sucesso!' } })
    yield call(cleanLocalStorage) */
  } else {
    yield put({ type: actions.FAILURE_USER_CREDENTIALS })
  }  

  return response
}

export function* saveCustomerCompany(action) {
  
  const response = yield call(user.getUserCredentials);

  if ( response.AUTHORIZED !== false ) {

    const customerData = {...action.payload.personData, ...action.payload.companyData}
    console.log(customerData)

    /* if ( response.AUTHORIZED !== false ) {
      let customerDB = JSON.parse(localStorage.getItem('customerDB'))
  
      if ( customerPersonDB === null ) {
        customerDB = [action.payload.companyData]
      } else {
        customerDB.push(action.payload.companyData)
      }
  
      localStorage.setItem('customerPersonDB', JSON.stringify(customerDB))
    yield put({ type: actions.REQUEST_SAVE_CUSTOMER_COMPANY_SUCCESS, payload: { data: 'dados gravados com sucesso!' } })
    yield call(cleanLocalStorage) */
  } else {
    yield put({ type: actions.FAILURE_USER_CREDENTIALS })
  }  

  return response
}