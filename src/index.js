// import React, { useState, useEffect } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader.js'
import useLocation from './useLocation'

// componentDidMount() {
//   window.navigator.geolocation.getCurrentPosition(position => this.setState({
//     lat: position.coords.latitude
//   }),
//     err => this.setState({
//       errorMessage: err.message
//     })
//   )
// }

// renderContent() {
//   if (this.state.errorMessage && !this.state.lat) {
//     return <div>Error: {this.state.errorMessage}</div>
//   }

//   if (!this.state.errorMessage && this.state.lat) {
//     return <SeasonDisplay lat={this.state.lat} />
//   }

//   return <Loader />
// }

const App = ( ) => {
  const [lat, err] = useLocation()

  let content;
  if (err) {
    content = <div> Error: {err} </div>
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />
  } else {
    content = <Loader />
  }

  return <div className="border red"> {content} </div>
}


ReactDOM.render(<App />, document.querySelector('#root'))