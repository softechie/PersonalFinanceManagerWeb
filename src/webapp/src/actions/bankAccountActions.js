import * as actions from './types'
import API from '../api'
import {notify} from 'reapop';

export const getAllBankAccount = () => {
  return (dispatch) => {
    dispatch({type: actions.GET_ALL_BANKACCOUNT_PENDING})
    API.get('/bankAccount/all')
      .then(res => dispatch({type: actions.GET_ALL_BANKACCOUNT_FULFILLED, payload: res}))
      .catch(err => dispatch({type: actions.GET_ALL_BANKACCOUNT_REJECTED, payload: err}))
  }
}

export const searchBankAccount = (bankAccountKey) => {
  return (dispatch) => {
    dispatch({type: actions.SEARCH_BANKACCOUNT_PENDING})
    API.get(`/bankAccount/search/${bankAccountKey}`)
      .then(res => dispatch({type: actions.SEARCH_BANKACCOUNT_FULFILLED, payload: res}))
      .catch(err => dispatch({type: actions.SEARCH_BANKACCOUNT_REJECTED, payload: err}))
  }
}