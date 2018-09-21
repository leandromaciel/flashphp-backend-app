import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as userActions from '../actions/user'

import User from '../components/User/User'
import Login from '../components/Login/Login'
import Dashboard from '../components/Dashboard/Dashboard'
import Customer from '../components/Customer/Customer'


class Routes extends Component {

    componentDidMount() {
        this.props.requestUserCredentials()
    }

    render() {
        return (
            <div>
                <Route exact path='/' component={Login} />
                <Route exact path='/sair' component={() => <Login action='logout' />} />
                <Route exact path='/usuario' component={User} />
                <Route exact path='/painel' component={() => <Dashboard />} />
                
                {/*CUSTOMER ROUTES */}
                <Route exact path='/novo-cliente' component={() => <Customer action='new' />} />
                <Route exact path='/listar-clientes' component={() => <Customer action='list' />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(userActions, dispatch)
    
const mapStateToProps = state => ({
    state
}) 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes))