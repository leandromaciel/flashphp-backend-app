import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col, Fa } from 'mdbreact';

import * as customerActions from '../../actions/customer'

/* import TableList from '../TableList/TableList' */
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
            companyChecked: false
        }
    }

    getSelectValue = (option) => {
        this.setState({
            customerType: option.target.value
        }) 
    }

    submitPersonHandler = (event) => {
        event.preventDefault();
        event.target.className += ' was-validated';

        const personData = JSON.parse(localStorage.getItem('customerPerson'))

        if ( personData !== null && personData.firstName !== '' && personData.lastName !== '' && personData.nickName !== '' ) {
            this.props.requestSaveCustomerPerson(personData)
            this.cleanLocalStorage()
        }
    }

    submitCompanyHandler = (event) => {
        event.preventDefault();
        event.target.className += ' was-validated';

        const personData = JSON.parse(localStorage.getItem('customerPerson'))
        const companyData = JSON.parse(localStorage.getItem('customerCompany'))

        if ( companyData !== null && companyData.firstName !== '' && companyData.lastName !== '' && companyData.nickName !== '' ) {
            this.props.requestSaveCustomerCompany(personData, companyData)
            this.cleanLocalStorage()
        }
    }

    cleanLocalStorage = () => {
        localStorage.removeItem('customerPerson')
        localStorage.removeItem('customerCompany')
        return true
    }
    
    render() {
        return (
            <div className="form-group margin-top-navbar-content">
                {/*this.props.action === 'list' && <TableList />*/}
                {
                    this.props.action === 'new' &&
                        <Container className="mt-5">
                            <Row className="mt-6">
                                <Col>
                                    <div>
                                        <h3>Escolha o tipo de cliente:</h3>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="customerType" id="customerTypePerson" value="person" checked={this.state.customerType === 'person'} onClick={this.getSelectValue} />
                                        <label className="form-check-label" htmlFor="customerTypePerson">Pessoa Física</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="customerType" id="customerTypeCompany" value="company" checked={this.state.customerType === 'company'} onClick={this.getSelectValue} />
                                        <label className="form-check-label" htmlFor="customerTypeCompany">Pessoa Jurídica</label>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                }
               
                {
                    this.props.customer.success &&
                        <div className="alert alert-success" role="alert">
                            {this.props.customer.success}
                        </div>
                }
                
                {
                    this.state.customerType === 'person' && 
                    <Container className="mt-5">
                        <Row className="mt-6">
                            <Col>
                                <form className='needs-validation' onSubmit={this.submitPersonHandler} noValidate>
                                    <Person />

                                    <div className="col-md-4 mb-3">
                                        <div className="col-md-4 mb-3">
                                            <div className="form-check pl-0">
                                                <input className="form-check-input" type="checkbox" id="isActive" name="isActive" onClick={this.changeHandler   } />
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
                    this.state.customerType === 'company' && 
                    <Container className="mt-5">
                        <Row className="mt-6">
                            <Col>
                                <form className='needs-validation' onSubmit={this.submitCompanyHandler} noValidate>
                                    <Person />
                                    <Company />

                                    <div className="col-md-4 mb-3">
                                        <div className="col-md-4 mb-3">
                                            <div className="form-check pl-0">
                                                <input className="form-check-input" type="checkbox" id="isActive" name="isActive" onClick={this.changeHandler   } />
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
