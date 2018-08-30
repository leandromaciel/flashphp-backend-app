import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Dashboard from '../containers/Dashboard/Dashboard'
import Login from '../containers/Login/Login'
import User from '../containers/User/User'
import AccessDenied from '../containers/AccessDenied'
import NotFound from '../containers/NotFound'


class PrivateRoute extends Component {

    handleCredentials = () => {
        return true
    }

    render () {

        if (localStorage.getItem('CSRF_TOKEN_VALUE')) {
            if (this.handleCredentials()) {
                return <Route path={this.props.path} component={this.props.component} />
            } else {
                return <Route path='/acess-denied' component={AccessDenied} />
            }
        } else {
            return <Redirect to="/login" />
        }
    }
}

export default class Routes extends Component {
    render () {
        return (
            <Switch>
                <PrivateRoute path='/' exact component={() => <Dashboard />} />
                <PrivateRoute path='/usuario' exact component={() => <User baseUrl={this.props.baseUrl} action='list' />} />
                <PrivateRoute path='/usuario/editar' exact component={() => <User baseUrl={this.props.baseUrl} action='edit' />} />
                <Route path='/login' component={() => <Login baseUrl={this.props.baseUrl}/>} />
                <Route path='/logout' component={() => <Login baseUrl={this.props.baseUrl} logout={true}/>} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}