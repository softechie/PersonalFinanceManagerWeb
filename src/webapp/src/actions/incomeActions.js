import { GET_ALL_INCOME, GET_INCOME, SEARCH_INCOME } from './types'
import API from '../api'

export const getAllIncome = () => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_INCOME,
      payload: API.get('/income/all')
    })
  }
}

export const getIncome = (incomeId) => {
  return (dispatch) => {
    dispatch({
      type: GET_INCOME,
      payload: API.get(`/income/${incomeId}`)
    })
  }
}

export const searchIncome = (incomeKey) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_INCOME,
      payload: API.get(`/income/search/${incomeKey}`)
    })
  }
}