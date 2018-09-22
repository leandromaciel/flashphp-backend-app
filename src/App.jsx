import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as userActions from './actions/user'

import Network from './components/Network'
import Navigation from './components/Navigation/Navigation'
import Routes from './routes/index'

class App extends Component {

  componentDidMount() {
    this.props.requestUserCredentials()
  }

  render() {
    return (
      <div className="App">
        <Network />
        <Navigation />
        <Router>
          <Switch>
            <Routes />
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(userActions, dispatch)
    
const mapStateToProps = state => ({
    state
}) 

export default connect(mapStateToProps, mapDispatchToProps)(App)
