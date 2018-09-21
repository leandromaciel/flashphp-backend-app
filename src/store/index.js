import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

let history = createBrowserHistory()
let store = createStore(connectRouter(history)(reducer), compose(applyMiddleware(sagaMiddleware, routerMiddleware(history))))

sagaMiddleware.run(rootSaga)

export { store, history }