import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Row, Fa } from 'mdbreact';

import * as customerActions from '../../actions/customer'

class Company extends Component {

    constructor(props) {
        super(props)

        this.state = this.props.customer.company
    }

    changeHandler = (event) => {

        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            companyDataIsSet: true,
            [name]: value
        })
    }

    render() {
        if (this.state.companyDataIsSet === true) {
            localStorage.setItem('customerCompany', JSON.stringify(this.state))
        }
        
        return (
            
            <Fragment>

                <Row>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="vatNumber" className="grey-text">CNPJ</label>
                        <input value={this.state.vatNumber} name='vatNumber' onChange={this.changeHandler} type="text" id="vatNumber" className="form-control" placeholder="12312312000123"  />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="additionalVatNumber" className="grey-text">IE</label>
                        <input value={this.state.additionalVatNumber} name='additionalVatNumber' onChange={this.changeHandler} type="text" id="additionalVatNumber " className="form-control" placeholder="12312312312" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="taxRegiment" className="grey-text">Regime Tributário</label>
                        <select className="form-control" id="taxRegiment" name="taxRegiment" defaultValue="" onChange={this.changeHandler}>
                            <option value=''>Selecione...</option>
                            <option value='mei'>MEI</option>
                            <option value='empresario individual'>Empresário Individual</option>
                            <option value='simples nacional'>Simples Nacional</option>
                            <option value='eirelli'>EIRELLI</option>
                            <option value='lucro real'>Lucro Real</option>
                            <option value='lucro presumido'>Lucro Presumido</option>
                        </select>
                    </div>
                </Row>
                <Row>
                    <div className="col-md-2 mb-3">
                        <label htmlFor="companyPrefixFixedPhone" className="grey-text">DDD telefone fixo</label>
                        <input value={this.state.companyPrefixFixedPhone} name='companyPrefixFixedPhone' onChange={this.changeHandler} type="text" id="companyPrefixFixedPhone" className="form-control" placeholder="5511" maxLength='4' />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="companyFixedPhone" className="grey-text">Telefone fixo</label>
                        <input value={this.state.fixedPhone} name="companyFixedPhone" onChange={this.changeHandler} type="text" id="companyFixedPhone" className="form-control" placeholder="123456789" maxLength='9' />
                    </div>
                    <div className="col-md-2 mb-3">
                        <label htmlFor="companyPrefixMobilePhone" className="grey-text">DDD Celular</label>
                        <input value={this.state.companyPrefixMobilePhone} name='companyPrefixMobilePhone' onChange={this.changeHandler} type="text" id="companyPrefixMobilePhone" className="form-control" placeholder="5511" maxLength='4' />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="companyMobilePhone" className="grey-text">Telefone Celular</label>
                        <input value={this.state.mobilePhone} name="companyMobilePhone" onChange={this.changeHandler} type="text" id="mobilePhone" className="form-control" placeholder="123456789" maxLength='9' />
                    </div>
                </Row>
                <Row>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="internalCode" className="grey-text">Código interno</label>
                        <input value={this.state.internalCode} name='internalCode' onChange={this.changeHandler} type="text" id="internalCode" className="form-control" placeholder="12345" required />
                        <div className="invalid-feedback"><Fa icon='exclamation-circle' /> Campo obrigatório!</div>
                        <div className="valid-feedback"><Fa icon='check-circle' /></div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="companyEmail" className="grey-text">Email Coorporativo</label>
                        <input value={this.state.email} name='email' onChange={this.changeHandler} type="companyEmail" id="companyEmail" className="form-control" placeholder="email@site.com" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <div>
                            <h5>Tipo:</h5>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="companyType" id="companyTypeParent" value="parent" checked={this.state.companyType === 'parent'} onClick={this.changeHandler} required />
                            <label className="form-check-label" htmlFor="companyTypeParent">Matriz</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="companyType" id="companyTypeSubsidiary" value="subsidiary" checked={this.state.companyType === 'subsidiary'} onClick={this.changeHandler} required />
                            <label className="form-check-label" htmlFor="companyTypeSubsidiary">Filial</label>
                        </div>
                        <div className="invalid-feedback"><Fa icon='exclamation-circle' /> Campo obrigatório!</div>
                        <div className="valid-feedback"><Fa icon='check-circle' /></div>
                    </div>
                </Row>
                <Row>
                    <div className="col-md-4 mb-3">
                        <div>
                            <h5>Perfil:</h5>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="companyCustomerType" id="companyCustomerTypeOwn" value="own" checked={this.state.companyCustomerType === 'own'} onClick={this.changeHandler} required />
                            <label className="form-check-label" htmlFor="companyCustomerTypeOwn">Cliente Próprio</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="companyCustomerType" id="companyCustomerTypeRepresentative" value="representative" checked={this.state.companyCustomerType === 'representative'} onClick={this.changeHandler} required />
                            <label className="form-check-label" htmlFor="companyCustomerTypeRepresentative">Representante</label>
                        </div>
                        <div className="invalid-feedback"><Fa icon='exclamation-circle' /> Campo obrigatório!</div>
                        <div className="valid-feedback"><Fa icon='check-circle' /></div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="salesman" className="grey-text">Vendedor Responsável</label>
                        <select className="form-control" id="salesman" name="salesman" defaultValue="" onChange={this.changeHandler} required>
                            <option value=''>Selecione...</option>
                            <option value='1'>João da Silva</option>
                            <option value='2'>José da Silva</option>
                            <option value='3'>Marcelo da Silva</option>
                        </select>
                        <div className="invalid-feedback"><Fa icon='exclamation-circle' /> Campo obrigatório!</div>
                        <div className="valid-feedback"><Fa icon='check-circle' /></div>
                    </div>
                </Row>
            </Fragment>        
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(customerActions, dispatch)


const mapStateToProps = state => ({
    user: state.user,
    customer: state.customer
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Company))
