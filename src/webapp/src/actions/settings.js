import * as actions from './types'
import API from '../api'
import {notify} from 'reapop';




export const getSettings = (emailId) => {
    return (dispatch) => {
      dispatch({type: actions.GET_SETTINGS_PENDING})
      API.get(`/settings/${emailId}`)
        .then(res => dispatch({type: actions.GET_SETTINGS_FULFILLED, payload: res}))
        .catch(err => {
          dispatch({type: actions.GET_SETTINGS_REJECTED, payload: err})
          dispatch(notify({message: 'Error occurred while fetching data', status: 'error'}));
        })
    }
  }