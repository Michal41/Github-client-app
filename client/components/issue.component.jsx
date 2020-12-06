
import {connect} from 'react-redux'
import React from 'react';


const Issue = ({...props}) => {
  const {title, body,closeIssue, id} = props
  return(
    
    <div>
      <div className="fr w-100 bg-white border-color-dark-blue2 
        mt0 br2 shadow-2 bb black hover-bg-light-gray">

        <div className="fl w-30 black--70 pl2 pv3 f6 b--white-40 tc">
          {title}
        </div>

        <div className="fl w-50 black--70 pl2 pv3 f6 b--white-40 tc">
          {body}
        </div>

        <div className="fl w-20 black--70 pl2 pv3 f6  b--white-40 tc">
          <button 
          className='tc ml3-l ml0 b ph2 pv2 ba 
          border-color-dark-gray2 white bg-transparent grow 
          pointer f5 dib shadow-2 br1 bg-color-dark-gray2 w-80'
          onClick={() => closeIssue(id)}
          > Close this Issue </button>
        </div>
      
      </div>
    </div>
    
)}


const mapDispachToProps = dispatch => {
  return {
    closeIssue: (id) => dispatch({ type: "CLOSE_ISSUE", value: id }),
  };
};

export default connect(null,mapDispachToProps)(Issue);