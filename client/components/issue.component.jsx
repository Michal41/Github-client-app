
import {connect} from 'react-redux'
import React from 'react';



const Issue = ({...props}) => {
  const {title, body} = props
  return(
    <div>
      title: {title},
      body: {body}

    </div>
)}

export default connect()(Issue);