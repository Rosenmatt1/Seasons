import React from 'react' 

const Loader = (props) => {
  

  return (
 
    <div className="ui active dimmer">
      <div className="ui text loader">{props.message ||'Loading'}</div>
    </div>

    // Loader.defaultProps {
    //   message: 'Loading...'
    // }
  
 
  )
}

export default Loader