import { legacy_createStore as createStore } from 'redux'

// Action Type
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// Action Creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action',
    };
}

// Action Creator
function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: 'First redux action',
    };
}

// Initial State
const initialState = {
    numOfCakes: 10,
    numOfIcecream: 20,
};

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            };

        case BUY_ICECREAM:
            return {
                ...state,
                numOfIcecream: state.numOfIcecream - 1,
            };
        default:
            return state;
    }
};

// Create Store
const store = createStore(reducer);

// Log the initial state
console.log('Initial state:', store.getState());

// Subscribe to the store
const unsubscribe = store.subscribe(() =>
    console.log('Updated state:', store.getState())
);

// Dispatch an action
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream())
// Unsubscribe from the store
unsubscribe();
