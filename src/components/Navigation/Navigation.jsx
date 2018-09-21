import React, { Component, Fragment } from 'react';
import { Fa, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <Router>
                <Navbar color="indigo" dark expand="lg" scrolling fixed="top">
                    <NavbarBrand href="/">
                        <strong>Navbar</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    
                    {this.props.user.credentials.AUTHORIZED === true  &&
                        <Fragment>
                            <Collapse isOpen = { this.state.collapse } navbar>
                                <NavbarNav left>
                                    <NavItem>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/painel">Home</a>
                                        </li>
                                    </NavItem>
                                    <NavItem>
                                        <Dropdown>
                                            <DropdownToggle nav caret>Clientes</DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem href="/novo-cliente">Novo</DropdownItem>
                                                <DropdownItem href="/listar-clientes">Listar</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </NavItem>
                                </NavbarNav>
                                <NavbarNav right>
                                    <NavItem>
                                        <form className="form-inline md-form mt-0">
                                            <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                                        </form>
                                    </NavItem>
                                </NavbarNav>
                                
                            </Collapse>
                            <NavbarNav right>
                                <NavItem>
                                    <Dropdown>
                                        <DropdownToggle nav caret><Fa icon="user"/></DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem href="/sair">Sair</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavItem>
                            </NavbarNav>
                        </Fragment>
                    }
                </Navbar>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    dashboard: state.dashboard
})

export default connect(mapStateToProps)(Navigation)