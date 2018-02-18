import { createStore, applyMiddleware, compose  } from 'redux'
import rootReducer  from '../reducers'
import { loggerData } from './middleware'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, loggerData),
);
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )

    if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
      })
    }

  return store
}
