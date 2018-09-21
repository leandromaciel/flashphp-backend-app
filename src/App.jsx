import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Routes from './routes/index'
import Navigation from './containers/Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
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

export default App;
