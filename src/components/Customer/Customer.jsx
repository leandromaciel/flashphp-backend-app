import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Fa } from 'mdbreact';

import * as customerActions from '../../actions/customer'

import TableList from '../TableList/TableList'

import Person from './Person'
import Company from './Company'

class Customer extends Component {

    constructor(props) {
        super(props)

        if (this.props.user.credentials.AUTHORIZED === false) {
            this.props.history.push('/')
        }

        this.state = {
            customerType: 'person',
            personChecked: true,
            companyChecked: false,
            isActive: false
        }
    }

    getSelectValue = (option) => {
        this.setState({
            customerType: option.target.value
        }) 
    }

    handleIsActive = (checkbox) => {
        this.setState({
            isActive: checkbox.target.checked
        })
    }

    submitPersonHandler = (event) => {
        event.preventDefault();
        event.target.className += ' was-validated';

        const personData = JSON.parse(localStorage.getItem('customerPerson'))

        if ( personData !== null && personData.firstName !== '' && personData.lastName !== '' && personData.nickName !== '' ) {
            personData.isActive = this.state.isActive
            this.props.requestSaveCustomerPerson(personData)
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        event.target.className += ' was-validated';

        const personData = JSON.parse(localStorage.getItem('customerPerson'))
        const companyData = JSON.parse(localStorage.getItem('customerCompany'))

        if ( personData !== null && companyData !== null ) {
            if ( personData.personDataIsSet === true && companyData.companyDataIsSet === true ) {
                const personValid = this.validatePersonData(personData)
                const companyValid = this.validateCompanyData(companyData)
                
                if ( personValid === true && companyValid === true ) {
                    this.saveCustomer(personData, companyData)
                }
            }
    
            if ( personData.personDataIsSet === true && companyData.companyDataIsSet === false ) {
                const personValid = this.validatePersonData(personData)
                
                if ( personValid === true ) {
                    this.saveCustomer(personData, companyData)
                }
            }
        }
    }

    validatePersonData = (personData) => {
        if ( personData !== null && personData.firstName !== '' && personData.lastName !== '' && personData.nickName !== '' ) {
            return true
        } 

        return false
    }

    validateCompanyData = (companyData) => {
        if ( companyData !== null && companyData.internalCode !== '' && companyData.companyType !== '' && companyData.companyCustomerType !== '' && companyData.companyCustomerType !== '' ) {
            return true
        }

        return false
    }

    saveCustomer = (personData, companyData) => {
        personData.isActive = this.state.isActive
        companyData.isActive = this.state.isActive
        companyData.id = Math.floor(Math.random() * 100)
        personData.id = companyData.id
        this.props.requestSaveCustomer(personData, companyData)
    }

    render() {
        return (
            <div className="form-group margin-top-navbar-content">
                {
                    this.props.customer.success &&
                        <div className="alert alert-success" role="alert">
                            {this.props.customer.success}
                        </div>
                }

                {
                    this.props.action === 'list' && 
                        <TableList caption={this.props.customer.listCaption} columns={this.props.customer.csvHeader} csvHeader={this.props.customer.csvHeader} data={JSON.parse(localStorage.getItem('customerDB'))} />
                }
                
                {
                    this.props.action === 'new' &&
                        <Container className="mt-5">
                            <Row className="mt-6">
                                <Col>
                                    <div>
                                        <h3>Escolha o tipo de cliente:</h3>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="customerType" id="customerTypePerson" value="person" checked={this.state.customerType === 'person'} onChange={this.getSelectValue} />
                                        <label className="form-check-label" htmlFor="customerTypePerson">Pessoa Física</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="customerType" id="customerTypeCompany" value="company" checked={this.state.customerType === 'company'} onChange={this.getSelectValue} />
                                        <label className="form-check-label" htmlFor="customerTypeCompany">Pessoa Jurídica</label>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                }
               
                {
                    this.props.action === 'new' && this.state.customerType === 'person' && 
                    <Container className="mt-5">
                        <Row className="mt-6">
                            <Col>
                                <form className='needs-validation' onSubmit={this.submitHandler} noValidate>
                                    <Person />
                                    <div className="col-md-4 mb-3">
                                        <div className="col-md-4 mb-3">
                                            <div className="form-check pl-0">
                                                <input className="form-check-input" type="checkbox" id="isActive" name="isActive" onClick={this.handleIsActive} />
                                                <label className="form-check-label" htmlFor="isActive">
                                                    Cliente ativo
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-dark-green" type="submit"> Salvar <Fa icon='save' /></button>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                }
                
                {
                    this.props.action === 'new' && this.state.customerType === 'company' && 
                    <Container className="mt-5">
                        <Row className="mt-6">
                            <Col>
                                <form className='needs-validation' onSubmit={this.submitHandler} noValidate>
                                    <Company />
                                    <Person />
                                    <div className="col-md-4 mb-3">
                                        <div className="col-md-4 mb-3">
                                            <div className="form-check pl-0">
                                                <input className="form-check-input" type="checkbox" id="isActive" name="isActive" onClick={this.handleIsActive} />
                                                <label className="form-check-label" htmlFor="isActive">
                                                    Cliente ativo
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-dark-green" type="submit"> Salvar <Fa icon='save' /></button>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(customerActions, dispatch)

const mapStateToProps = state => ({
    user: state.user,
    customer: state.customer
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Customer))
