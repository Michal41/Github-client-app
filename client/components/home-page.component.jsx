

import React, { Component } from "react";

import { connect } from "react-redux";

class HomePage extends Component {
  
  render() {
    console.log(this.props.repoName)
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