import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

export default class PrivateRoute extends Component {
    render () {

        if (!this.props.isPrivate) {
            return <Route path={this.props.path} component={this.props.component} />    
        }

        if ( typeof this.props.credentials.AUTHORIZED !== 'undefined' ) {
           if (localStorage.getItem('CSRF_TOKEN_VALUE')) {   
                return (
                        (this.props.credentials.AUTHORIZED)?
                            <Route path={this.props.path} component={this.props.component} />
                        :
                        <Redirect to="/sair" />
                )
            } else {
                return <Redirect to="/entrar" />
            }
        } else {
            return null
        } 
    }
}