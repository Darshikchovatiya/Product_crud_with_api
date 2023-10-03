import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Product_red } from './services/reducers/productReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(Product_red, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;