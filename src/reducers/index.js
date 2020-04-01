import { combineReducers } from 'redux'
import loggedUser from "./islogged"
import counterReducer from "./counter"


const allReducers = combineReducers({
    counter:counterReducer,
    islogged:loggedUser
})

export default allReducers