import React from 'react'
import { Route } from 'react-router-dom'

import Dashboard from '../components/Dashboard/Dashboard'
import Login from '../components/Login/Login'

const Routes = () => (
    <div>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/entrar' component={() => <Login baseUrl={this.props.baseUrl}/>} />
    </div>
)

export default Routes