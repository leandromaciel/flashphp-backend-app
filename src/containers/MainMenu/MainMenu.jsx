import React, { Component, Fragment } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import NavigationMenu from '../NavigationMenu/NavigationMenu.jsx'
import LogoutMenu from '../LogoutMenu/LogoutMenu.jsx'

export default class MainMenu extends Component {
    render() {
        return (
            <Fragment>
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href='https://www.flashcommerce.com.br' target='_blank' rel="noopener noreferrer">FlashCommerce</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                        <NavigationMenu />
                        </Nav>
                        <Nav pullRight>
                        <LogoutMenu />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}
