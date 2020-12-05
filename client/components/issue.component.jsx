
import {connect} from 'react-redux'
import React from 'react';


const Issue = ({...props}) => {
  const {title, body,closeIssue, id} = props
  return(
    <div style={{height:"200px", marginLeft:"auto", marginRight:"auto", 
          width:"450px", border:"solid", marginBottom:"7px", borderRadius:".25rem"}}>
      <div style={{fontSize:"2rem", fontWeight:"bold"}}>{title}</div>
      <div style={{textAlign:"center"}}> {body} </div>
      <button onClick={() => closeIssue(id)}> Close this Issue </button>
    </div>
)}


const mapDispachToProps = dispatch => {
  return {
    closeIssue: (id) => dispatch({ type: "CLOSE_ISSUE", value: id }),
  };
};

export default connect(null,mapDispachToProps)(Issue);