
import React from 'react'
import { Provider } from "react-redux";

import HomePage from "./home-page.component"




class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <Provider store={ReactOnRails.getStore("appStore")}>
        <HomePage props={this.props}/>
      </Provider>
    )
  }
}

export default App;


