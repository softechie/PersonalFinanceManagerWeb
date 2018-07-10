import { GET_ALL_INVESTMENTS, GET_INVESTMENTS, SEARCH_INVESTMENTS } from './types'
import API from '../api'

export const getAllInvestments = () => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_INVESTMENTS,
      payload: API.get('/investments/all')
    })
  }
}

export const getInvestments = (investmentsId) => {
  return (dispatch) => {
    dispatch({
      type: GET_INVESTMENTS,
      payload: API.get(`/investments/${investmentsId}`)
    })
  }
}

export const searchInvestments = (investmentsKey) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_INVESTMENTS,
      payload: API.get(`/investments/search/${investmentsKey}`)
    })
  }
}