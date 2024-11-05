// console.log("from index.js")
const redux = require('redux');
const createStore = redux.createStore
const BUY_CAKE = 'BUY_CAKE';

function buycake(){
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}
const initialState = {
    numOfCakes: 10,
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: {
            return state;
        }
    }
   

}

const store = createStore(reducer)
console.log('initial state', store.getState())