import React, { Component } from 'react'
import Routes from './routes/index.jsx'

import './App.css'


class App extends Component {

  constructor() {
    super()

    this.state = {
      baseUrl: 'http://localhost/flashphp/public/backend'
    }
  }

  render() {
    return (
      <div className="App container">
        <Routes baseUrl={this.state.baseUrl} />
      </div>
    );
  }
}

export default App;
