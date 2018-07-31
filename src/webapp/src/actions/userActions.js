import * as actions from './types'
import API from '../api/apiController'
import { history } from '../helper'

export const loginUser = (loginDetails) => {
  return (dispatch) => {
    dispatch({type: actions.AUTH_LOGIN_PENDING})
    API.post('/login', loginDetails)
      .then(res => {
        //set local storage item
        const pfmUser = {
          emailId: loginDetails.emailId
        }
        localStorage.setItem('pfm_user', JSON.stringify(pfmUser));
        dispatch({type: actions.AUTH_LOGIN_FULFILLED, payload: { res, pfmUser}})
        history.push('/')
      })
      .catch(err => {
        dispatch({type: actions.AUTH_LOGIN_REJECTED, payload: err})
      }) 
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch({type: actions.AUTH_LOGOUT})
    localStorage.removeItem('pfm_user');
    history.push('/login')
  }
}