
import React from 'react'

import {connect} from "react-redux"

class NewIssueForm extends React.Component{
  constructor(){
    super();
    this.state={
      body:"",
      title:""
    }
  }

 handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})

 }

 handleSubmit = (e) => {
   e.preventDefault();

  this.props.createIssue({title:this.state.title,body:this.state.body, id:Date.now()})
  
};
  

 
  render(){ 
    return(
      <div className="center w-70"> 
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="title" 
            placeholder="title here"
            value={this.state.title}
            onChange={this.handleChange}
            className="b pa2 mt2 input-reset ba bg-transparent 
            black-60 hover-black border-color-dark-gray2"
          />
          <input 
            type="textArea"
            name="body"
            placeholder="body here"
            value={this.state.body}
            onChange={this.handleChange}
            className="b pa2 input-reset ba bg-transparent 
            black-60 hover-black  border-color-dark-gray2"


          />
          <button 
            className='tc ml3-l ml0 b ph2 pv2 ba border-color-dark-gray2 
            white bg-transparent grow pointer f5 shadow-2 
            br1 bg-color-dark-gray2'
            
            type="submit"
          > 
            Create Issue
          </button>
      </form>
    </div>  
    )
  }

}

const mapDispachToProps = dispatch => {
  return {
    createIssue: (issue) => dispatch({ type: "CREATE_ISSUE", value: issue }),
  };
};

export default connect(null,mapDispachToProps)(NewIssueForm)