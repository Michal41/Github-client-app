import React from "react";
import { connect } from "react-redux";
import Issue from "./issue.component";
import NewIssueForm from "./new-isuue-form.component";
import "./home-page.styles.css"
const HomePage = ({...props}) =>{
  const {repoName, issues} = props;
  return (
    
    
    <div className="w-80 center ba">
            
      <h1 className="tc black-70">
        Repository name {repoName}
      </h1>
      <div className="fr w-100 bg-color-dark-gray3 bl mt4 br2 shadow-2">

        <div className="fl w-30 white b pl2 pv3 f6 br b--white-40 tc">
            Title
        </div>
        <div className="fl w-50 white b pl2 pv3 f6 br b--white-40 tc">
            Description
        </div>

        <div className="fl w-20 white b pl2 pv3 f6 br b--white-40 tc">
            Actions
        </div>
      </div>    
      
      
      
      
      
      <div className="w-100 overflow-x-hidden">
        {issues.map(issue => (
          <Issue 
            key={issue.id}
            title={issue.title}
            body= {issue.body}
            id={issue.id}  
        />    
        ))}
      </div>
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

