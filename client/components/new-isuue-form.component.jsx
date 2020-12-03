
import React from 'react'

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
   
 }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="title" 
          placeholder="title here"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input 
          type="textArea"
          name="body"
          placeholder="body here"
          value={this.state.body}
          onChange={this.handleChange}

        />
        <button 
          type="submit"
        >
          Create Issue
        </button>
    </form>
    )
  }

}



export default NewIssueForm