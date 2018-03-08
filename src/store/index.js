import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
// import { createStore } from 'redux'
import thunk from 'redux-thunk';
import { AuthReducer } from './authReduces/authReducer';
import { DonorReducer } from './authReduces/donorReducer';

// export const store = createStore(combineReducers({ AuthReducer }, {}, applyMiddleware(thunk)))
//////////////////////////////

const middleware = compose(
    applyMiddleware(thunk)
);
const reducers = combineReducers({
    AuthReducer,
    DonorReducer
})
export const store = createStore(
    reducers,
    middleware
)

/////////////////////////

store.subscribe(() => {
    console.log("STORE CHANGED", store.getState())
})
// store.dispatch({
//     type : 'SIGNUP',
//     value : "hwllo"
// })