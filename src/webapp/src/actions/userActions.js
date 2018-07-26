import * as actions from './types'
import API from '../api/apiController'
import { history } from '../helper'

export const loginUser = (loginDetails) => {
  return (dispatch) => {
    dispatch({type: actions.AUTH_LOGIN_PENDING})
    API.post('/login', loginDetails)
      .then(res => {
        dispatch({type: actions.AUTH_LOGIN_FULFILLED, payload: res})
        history.push('/')
        
        
      })
      .catch(err => {
        
        dispatch({type: actions.AUTH_LOGIN_REJECTED, payload: err})
        
      }) 
  }
}

export const logout=()=>{
return(dispatch)=>{
dispatch({type:actions.AUTH_LOGOUT})
history.push('/login')
}


}