
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReduce from '../redusers';

const state = createStore(rootReduce,applyMiddleware(thunk));

export default state;
