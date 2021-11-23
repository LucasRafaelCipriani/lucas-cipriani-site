import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import globalReducer from './reducers/globalReducer';

import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  global: globalReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
