import * as actions from '../actions/types'

let user = JSON.parse(localStorage.getItem('pfm_user'));
const initialState = user ? { loggedIn: true, user: user } : { loggedIn: false, user: {} };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.AUTH_LOGIN_FULFILLED:
      return state = {...state, loggedIn: true, user: action.payload.pfmUser }
     case actions.AUTH_LOGOUT:
        return state = {...state, loggedIn: false }
   default:
    return state
    }
}