import React from "react";
import { connect } from "react-redux";
import Issue from "./issue.component";
import NewIssueForm from "./new-isuue-form.component";

const HomePage = ({...props}) =>{
  const {repoName, issues} = props;
  return (
    <div style={{color:"#303b9c", width:"600px", textAlign:"center"}}>
      <h1>
        Repository name: {repoName}
      </h1>
      {issues.map(issue => (
        <Issue 
          key={issue.id}
          title={issue.title}
          body= {issue.body}
          id={issue.id}  
        />    
        ))}
      <NewIssueForm></NewIssueForm>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    repoName:state.railsProps.repo_name,
    issues: state.railsProps.issues
  };
};

export default connect(mapStateToProps)(HomePage);

