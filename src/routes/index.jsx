import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import User from '../containers/User/User'
import Login from '../containers/Login/Login'
import Dashboard from '../containers/Dashboard/Dashboard'

class Routes extends Component {

    render() {
        return (
            <div>
                <Route exact path='/' component={Login} />
                <Route exact path='/usuario' component={User} />
                <Route exact path='/dashboard' component={Dashboard} />
            </div>
        )
    }
}
    
const mapStateToProps = state => ({
    state
}) 

export default connect(mapStateToProps)(Routes)
