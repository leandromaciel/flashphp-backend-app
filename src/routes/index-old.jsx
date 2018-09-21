import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import PrivateRoute from './PrivateRoute'

import Dashboard from '../containers/Dashboard/Dashboard'
import Login from '../containers/Login/Login'
import User from '../containers/User/User'
import AccessDenied from '../containers/AccessDenied'
import NotFound from '../containers/NotFound'


class Routes extends Component {
    render () {
        return (
            <Switch>
                <PrivateRoute
                    path='/' exact
                    isPrivate={true}
                    credentials={this.props.credentials}
                    component={() => <Dashboard baseUrl={this.props.baseUrl} />} 
                />
                <PrivateRoute 
                    path='/usuario' exact
                    isPrivate={true} 
                    credentials={this.props.credentials}
                    component={() => <User baseUrl={this.props.baseUrl} action='list' userActiveLink={true} />} 
                />
                <PrivateRoute 
                    path='/usuario/editar' exact
                    isPrivate={true}
                    credentials={this.props.credentials}
                    component={() => <User baseUrl={this.props.baseUrl} action='edit' />} 
                />
                <PrivateRoute 
                    path='/sair' exact
                    isPrivate={false}
                    credentials={this.props.credentials}
                    component={() => <Login baseUrl={this.props.baseUrl} logout={true} />} 
                />
                <Route path='/entrar' component={() => <Login baseUrl={this.props.baseUrl}/>} />
                {/* <Route path='/sair' component={() => <Login baseUrl={this.props.baseUrl} logout={true}/>} /> */}
                <Route path='/acesso-negado' component={AccessDenied} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

PrivateRoute.propTypes = {
    credentials: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        credentials: state.credentials
    }
}

export default connect(mapStateToProps)(Routes)
