import ReactOnRails from 'react-on-rails';


import App from "../components/App"

import { createStore, applyMiddleware } from 'redux'
import {watchCreateIssue} from "../redux-saga/sagas"
import {watchAgeUp} from "../redux-saga/sagas"

import { helloSaga } from '../redux-saga/sagas'
import createSagaMiddleware from 'redux-saga'





import request from 'axios';





function appStore(props, railsContext) {
  const sagaMiddleware = createSagaMiddleware()

  const initialState = {
    age: 20,
    railsProps: props
  };
  
  const reducer = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case "AGE_UP_ASYNC":
        newState.age += action.value;
        break;
  
      case "AGE_DOWN":
        newState.age -= action.value;
        break;

      case "CREATE_ISSUE_SUCCES":
        newState.railsProps.issues=
          [...newState.railsProps.issues,{
            title: action.value.title,
            body: action.value.body,
            id: Date.now()}]
        break;
    }
    return newState;
    
  };
  



  const store = createStore(
    reducer ,applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(watchCreateIssue);


  


  return store;
}









ReactOnRails.registerStore({
  appStore
});


ReactOnRails.register({
  App
});