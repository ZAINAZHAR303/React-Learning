import {BUY_CAKE} from "./CakeTypes"
const initialState = {
    numofCakes:10
}

const cakeReducer = (state=initialState, action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numofCakes: state.numofCakes-1
        }
        default: return state
    }
}

export default cakeReducer;