import { combineReducers } from 'redux'
import dataReducer from '../Main/modules/index'

const rootReducer = combineReducers ({
  data: dataReducer
});

export default rootReducer
