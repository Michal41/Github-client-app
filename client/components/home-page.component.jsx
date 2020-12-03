

import React, { Component } from "react";

import { connect } from "react-redux";
import Issue from "./issue.component";
import NewIssueForm from "./new-isuue-form.component";

class HomePage extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>

        <br/>
        <div style={{color:"red", width:"600px", textAlign:"center"}}>
          <h1>
            Repository name : {this.props.repoName}
          </h1>
          {this.props.issues.map(issue => (
            <Issue 
              key={issue.id}
              title={issue.title}
              body= {issue.body}  
            />    
            ))}


            <NewIssueForm></NewIssueForm>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    repoName:state.railsProps.repo_name,
    issues: state.railsProps.issues
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(HomePage);