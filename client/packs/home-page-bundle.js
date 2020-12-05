import ReactOnRails from 'react-on-rails';


import App from "../components/App"

import { createStore, applyMiddleware } from 'redux'
import {watchCreateIssue, watchCloseIssue} from "../redux-saga/sagas"

import createSagaMiddleware from 'redux-saga'











function appStore(props, railsContext) {
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
  sagaMiddleware.run(watchCreateIssue);
  sagaMiddleware.run(watchCloseIssue);



  


  return store;
}









ReactOnRails.registerStore({
  appStore
});


ReactOnRails.register({
  App
});