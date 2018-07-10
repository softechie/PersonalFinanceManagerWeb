import * as actions from './types'
import API from '../api'
import {notify} from 'reapop';

export const getAllIncome = () => {
  return (dispatch) => {
    dispatch({type: actions.GET_ALL_INCOME_PENDING})
    API.get('/income/all')
      .then(res => dispatch({type: actions.GET_ALL_INCOME_FULFILLED, payload: res}))
      .catch(err => {
        dispatch({type: actions.GET_ALL_INCOME_REJECTED, payload: err})
        dispatch(notify({message: 'Error occurred while fetching data', status: 'error'}));
      })
  }
}

export const getIncome = (incomeId) => {
  return (dispatch) => {
    dispatch({type: actions.GET_INCOME_PENDING})
    API.get(`/income/${incomeId}`)
      .then(res => dispatch({type: actions.GET_INCOME_FULFILLED, payload: res}))
      .catch(err => {
        dispatch({type: actions.GET_INCOME_REJECTED, payload: err})
        dispatch(notify({message: 'Error occurred while fetching data', status: 'error'}));
      })
  }
}

export const searchIncome = (incomeKey) => {
  return (dispatch) => {
    dispatch({type: actions.SEARCH_INCOME_PENDING})
    API.get(`/income/search/${incomeKey}`)
      .then(res => dispatch({type: actions.SEARCH_INCOME_FULFILLED, payload: res}))
      .catch(err => {
        dispatch({type: actions.SEARCH_INCOME_REJECTED, payload: err})
        dispatch(notify({message: 'Error occurred while fetching data', status: 'error'}));
      })
  }
}