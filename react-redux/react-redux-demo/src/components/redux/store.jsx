import {createStore} from 'redux'
import cakeReducer from "./cakes/CakeReducer"

const store = createStore(cakeReducer)

export default store