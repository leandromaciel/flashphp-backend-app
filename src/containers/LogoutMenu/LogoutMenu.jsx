import React, { Component, Fragment } from 'react'
import { NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../NavigationMenu/NavigationMenu.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

library.add(faPowerOff)

export default class LogoutMenu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            credentials: localStorage.getItem('CREDENTIALS'),
            userLogin: localStorage.getItem('USER_LOGIN'),
            csrfTokenName: localStorage.getItem('CSRF_TOKEN_NAME'),
            csrfTokenValue: localStorage.getItem('CSRF_TOKEN_VALUE'),
        }
    }
    
    render() {

        if (this.state.csrfTokenValue) {
            return (
                <Fragment>
                    <LinkContainer to="/logout">
                        <NavItem><FontAwesomeIcon icon="power-off" className="center-icon" size="2x" /><br /><span>Logout</span></NavItem>
                    </LinkContainer>
                </Fragment>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}
