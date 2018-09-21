import React, { Component } from 'react'
import {connect} from 'react-redux'

import NavbarFeatures from '../NavbarFeatures/NavbarFeatures'

const mapStateToProps = state => {
  return {config: state.config}
}

class ConnectedDashboard extends Component {

  doSomething = () => {
    console.log(this.props.config.baseUrl)
  }

  render() {
    return (
      <div>
        <NavbarFeatures />
      </div>
    )
  }

} 

const Dashboard = connect(mapStateToProps)(ConnectedDashboard)

export default Dashboard
