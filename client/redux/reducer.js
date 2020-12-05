

import { createStore, applyMiddleware } from 'redux'
import {rootSaga} from "../redux-saga/rootSaga"
import createSagaMiddleware from 'redux-saga'


export function appStore(props, railsContext) {
  const sagaMiddleware = createSagaMiddleware()

  const initialState = {
    railsProps: props
  };
  
  const reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
      case "UPDATE_ISSUES_LIST":  
        newState.railsProps.issues=[...action.value]
        break;
    }
    return newState;
    
  };
  

  const store = createStore(
    reducer ,applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga);
  
  


  return store;
}
