import * as actions from './types'
import API from '../api'
import {notify} from 'reapop';

export const getAllInvestments = () => {
  return (dispatch) => {
    dispatch({type: actions.GET_ALL_INVESTMENTS_PENDING})
    API.get('/investments/all')
      .then(res => dispatch({type: actions.GET_ALL_INVESTMENTS_FULFILLED, payload: res}))
      .catch(err => dispatch({type: actions.GET_ALL_INVESTMENTS_REJECTED, payload: err}))
  }
}

export const getInvestments = (investmentsId) => {
  return (dispatch) => {
    dispatch({type: actions.GET_INVESTMENTS_PENDING})
    API.get(`/investments/${investmentsId}`)
      .then(res => dispatch({type: actions.GET_INVESTMENTS_FULFILLED, payload: res}))
      .catch(err => dispatch({type: actions.GET_INVESTMENTS_REJECTED, payload: err}))
  }
}

export const searchInvestments = (investmentsKey) => {
  return (dispatch) => {
    dispatch({type: actions.SEARCH_INVESTMENTS_PENDING})
    API.get(`/investments/search/${investmentsKey}`)
      .then(res => dispatch({type: actions.SEARCH_INVESTMENTS_FULFILLED, payload: res}))
      .catch(err => dispatch({type: actions.SEARCH_INVESTMENTS_REJECTED, payload: err}))
  }
}