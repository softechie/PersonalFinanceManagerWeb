import { GET_ALL_BANKACCOUNT, SEARCH_BANKACCOUNT } from './types'
import API from '../api'

export const getAllBankAccount = () => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_BANKACCOUNT,
      payload: API.get('/bankAccount/all')
    })
  }
}

export const searchBankAccount = (bankAccountKey) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_BANKACCOUNT,
      payload: API.get(`/bankAccount/search/${bankAccountKey}`)
    })
  }
}