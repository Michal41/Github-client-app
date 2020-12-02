import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import HomePage from './home-page.component'
import { helloSaga } from '../redux-saga/sagas'
import {watchAgeUp} from "../redux-saga/sagas"
import React from 'react'
import { Provider } from "react-redux";




const initialState = {
  age: 20
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





const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer ,applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watchAgeUp)


const action = type => store.dispatch({type})
sagaMiddleware.run(watchAgeUp);

sagaMiddleware.run(watchAgeUp);





class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <Provider store={store}>
        <HomePage props={this.props}/>
      </Provider>
    )
  }
}

export default App;


