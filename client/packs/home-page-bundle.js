import ReactOnRails from 'react-on-rails';


import App from "../components/App"

import { createStore, applyMiddleware } from 'redux'
import {watchAgeUp} from "../redux-saga/sagas"
import { helloSaga } from '../redux-saga/sagas'
import createSagaMiddleware from 'redux-saga'








const action = type => store.dispatch({type})



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
    }
    return newState;
  };
  



  const store = createStore(
    reducer ,applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(watchAgeUp)


  const action = type => store.dispatch({type})
  sagaMiddleware.run(watchAgeUp);

  sagaMiddleware.run(watchAgeUp);


  return store;
}









ReactOnRails.registerStore({
  appStore
});


ReactOnRails.register({
  App
});