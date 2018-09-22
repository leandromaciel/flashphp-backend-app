import * as action from './index'

export function requestSaveCustomerPerson(personData) {
  return {
    type: action.REQUEST_SAVE_CUSTOMER_PERSON,
    payload: {
      personData
    }
  }
}