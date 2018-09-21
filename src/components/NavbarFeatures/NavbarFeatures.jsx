import React, { Component } from 'react'
import { Fa, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact'
import { withRouter } from 'react-router-dom'

class NavbarFeatures extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            collapse: false,
            isWideEnough: false,
            csrfTokenValue: localStorage.getItem('CSRF_TOKEN_VALUE'),
        }
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        })
    }

    render() {
        if (this.state.csrfTokenValue) {
            return (
                <div>
                    <Navbar color="amber" light expand="lg" scrolling>
                        <NavbarBrand href="/">
                            <strong>FlashCommerce</strong>
                        </NavbarBrand>
                        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                        <Collapse isOpen = { this.state.collapse } navbar>
                            <NavbarNav left>
                                <NavItem>
                                    <NavLink to="/"><Fa icon="home" size='2x' fixed/><br />Home</NavLink>
                                </NavItem>    
                                <NavItem>
                                    <NavLink to="#">Features</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#">Pricing</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Dropdown>
                                        <DropdownToggle nav caret>Dropdown</DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem href="#">Action</DropdownItem>
                                            <DropdownItem href="#">Another Action</DropdownItem>
                                            <DropdownItem href="#">Something else here</DropdownItem>
                                            <DropdownItem href="#">Something else here</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavItem>
                            </NavbarNav>
                            <NavbarNav right>
                                <NavItem>
                                    <form className="form-inline md-form mt-0">
                                    <input className="form-control mr-sm-2 mb-0 text-black" type="text" placeholder="Buscar" aria-label="Search"/>
                                    </form>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/sair"><Fa icon="power-off" size="2x"/></NavLink>
                                </NavItem>
                            </NavbarNav>
                        </Collapse>
                    </Navbar>
                </div>
            )
        } else {
            return (
                <div>
                    <Navbar color="amber" light expand="lg" scrolling>
                        <NavbarBrand href="/">
                            <strong>FlashCommerce</strong>
                        </NavbarBrand>
                    </Navbar>
                </div>              
            )
        }
    }
}

export default withRouter(NavbarFeatures)