import * as action from './index'

export function requestSaveCustomerPerson(personData) {
  return {
    type: action.REQUEST_SAVE_CUSTOMER_PERSON,
    payload: {
      personData
    }
  }
}

export function requestSaveCustomerCompany(personData, companyData) {
  return {
    type: action.REQUEST_SAVE_CUSTOMER_COMPANY,
    payload: {
      personData,
      companyData
    }
  }
}