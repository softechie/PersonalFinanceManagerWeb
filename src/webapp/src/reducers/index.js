import { combineReducers } from 'redux'

import incomeReducer from './incomeReducer'
import investmentsReducer from './investmentsReducer'
import bankAccountReducer from './bankAccountReducer'
import { reducer as ReduxFormReducer } from 'redux-form'

export default combineReducers({
    incomeReducer,
    investmentsReducer,
    bankAccountReducer,
    'form': ReduxFormReducer
})
