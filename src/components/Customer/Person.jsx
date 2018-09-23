import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Row, Fa } from 'mdbreact';

import * as customerActions from '../../actions/customer'

class Person extends Component {

    constructor(props) {
        super(props)

        this.state = this.props.customer.person
    }

    changeHandler = (event) => {

        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
           [name]: value
        })

        localStorage.setItem('customerPerson', JSON.stringify(this.state))
    }

    render() {
        return (
            
            <Fragment>

                <Row>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="firstName" className="grey-text">Primeiro Nome</label>
                        <input value={this.state.firstName} name='firstName' onChange={this.changeHandler} type="text" id="firstName" className="form-control" placeholder="João" required />
                        <div className="invalid-feedback"><Fa icon='exclamation-circle' /> Campo obrigatório!</div>
                        <div className="valid-feedback"><Fa icon='check-circle' /></div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="lastName" className="grey-text">Sobrenome</label>
                        <input value={this.state.lastName} name='lastName' onChange={this.changeHandler} type="text" id="lastName" className="form-control" placeholder="Da Silva" required />
                        <div className="invalid-feedback"><Fa icon='exclamation-circle' /> Campo obrigatório!</div>
                        <div className="valid-feedback"><Fa icon='check-circle' /></div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="nickName" className="grey-text">Apelido</label>
                        <input value={this.state.nickName} name='nickName' onChange={this.changeHandler} type="text" id="nickName" className="form-control" placeholder="Jão" required />
                        <div className="invalid-feedback"><Fa icon='exclamation-circle' /> Campo obrigatório!</div>
                        <div className="valid-feedback"><Fa icon='check-circle' /></div>
                    </div>
                </Row>
                <Row>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="birthDay" className="grey-text">Dia de nascimento</label>
                        <input value={this.state.birthDay} name='birthDay' onChange={this.changeHandler} type="text" id="birthDay" className="form-control" placeholder="01" maxLength='2' />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="birthMonth" className="grey-text">Mês de nascimento</label>
                        <input value={this.state.birthMonth} name='birthMonth' onChange={this.changeHandler} type="text" id="birthMonth" className="form-control" placeholder="01" maxLength='2' />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="birthYear" className="grey-text">Ano de nascimento</label>
                        <input value={this.state.birthYear} name='birthYear' onChange={this.changeHandler} type="text" id="birthYear" className="form-control" placeholder="2000" maxLength='4' />
                    </div>
                </Row>
                <Row>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="personalDocument" className="grey-text">RG</label>
                        <input value={this.state.personalDocument} name='personalDocument' onChange={this.changeHandler} type="text" id="personalDocument" className="form-control" placeholder="12345678" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="socialSecurity" className="grey-text">CPF</label>
                        <input value={this.state.socialSecurity} name='socialSecurity' onChange={this.changeHandler} type="text" id="socialSecurity" className="form-control" placeholder="12312312300" maxLength='11' />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="email" className="grey-text">Email</label>
                        <input value={this.state.email} name='email' onChange={this.changeHandler} type="email" id="email" className="form-control" placeholder="email@site.com" />
                    </div>
                </Row>
                <Row>
                    <div className="col-md-2 mb-3">
                        <label htmlFor="prefixFixedPhone" className="grey-text">DDD telefone fixo</label>
                        <input value={this.state.prefixFixedPhone} name='prefixFixedPhone' onChange={this.changeHandler} type="text" id="prefixFixedPhone" className="form-control" placeholder="5511" maxLength='4' />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="fixedPhone" className="grey-text">Telefone fixo</label>
                        <input value={this.state.fixedPhone} name='fixedPhone' onChange={this.changeHandler} type="text" id="fixedPhone" className="form-control" placeholder="123456789" maxLength='9' />
                    </div>
                    <div className="col-md-2 mb-3">
                        <label htmlFor="prefixMobilePhone" className="grey-text">DDD Celular</label>
                        <input value={this.state.prefixMobilePhone} name='prefixMobilePhone' onChange={this.changeHandler} type="text" id="prefixMobilePhone" className="form-control" placeholder="5511" maxLength='4' />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="mobilePhone" className="grey-text">Telefone Celular</label>
                        <input value={this.state.mobilePhone} name='mobilePhone' onChange={this.changeHandler} type="text" id="mobilePhone" className="form-control" placeholder="123456789" maxLength='9' />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Person))
