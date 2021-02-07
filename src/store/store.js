import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { fetchListItemEpic, fetchItemEpic } from '../epic';
import {ItemReducer} from '../reducer/ItemReducer';
import {listReducer} from '../reducer/ListReducer';

const reducers = combineReducers({
  item: ItemReducer,
  list: listReducer
});

const epic = combineEpics(
  fetchListItemEpic,
  fetchItemEpic
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;


