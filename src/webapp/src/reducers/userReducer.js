import * as actions from '../actions/types'

const initialState = {
  loggedIn: false
  }

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.AUTH_LOGIN_FULFILLED:
      return state = {...state, loggedIn: true }
     case actions.AUTH_LOGOUT:
        return state = {...state, loggedIn:false }
   default:
    return state
    }
}