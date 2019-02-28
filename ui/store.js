import { keaReducer, activatePlugin } from 'kea';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import sagaPlugin, { keaSaga } from 'kea-saga';
import createSagaMiddleware from 'redux-saga'

const reducers = combineReducers({
    kea: keaReducer('kea')
});

const reduxDevTools =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f;

export const initStore = () => {
    activatePlugin(sagaPlugin);
    const sagaMiddleware = createSagaMiddleware();
    const finalCreateStore = compose(
        applyMiddleware(sagaMiddleware)
    )(createStore);
    const store = finalCreateStore(reducers);

    sagaMiddleware.run(keaSaga);

    return store;
};
