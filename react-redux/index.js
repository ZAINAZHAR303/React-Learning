// console.log("from index.js")
const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM"; 
function buycake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}
function buyIceCream() {
    return {
      type: BUY_ICECREAM,
      
    };
  }
const initialCakeState = {
    numOfCakes: 10,
  };
  const initialIceCreamState = {
    numOfIceCreams: 20,
  }
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default: {
      return state;
    }
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
      case BUY_ICECREAM:
        return {
          ...state,
          numOfIceCreams: state.numOfIceCreams - 1,
        };
      default: {
        return state;
      }
    }
  };

  const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  })
const store = createStore(rootReducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyIceCream());
unsubscribe();
