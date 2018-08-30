import React, { Component, Fragment } from 'react'
import { NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './NavigationMenu.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClipboardList } from '@fortawesome/free-solid-svg-icons'

library.add(faUser)
library.add(faClipboardList)

export default class NavigationMenu extends Component {
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
                    <LinkContainer to="/usuario">
                        <NavItem><FontAwesomeIcon icon="user" className="center-icon" size="2x" /><br /><span>Usuario</span></NavItem>
                    </LinkContainer>
                    <LinkContainer to="/pedido">
                        <NavItem><FontAwesomeIcon icon="clipboard-list" className="center-icon" size="2x" /><br /><span>Pedido</span></NavItem>
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