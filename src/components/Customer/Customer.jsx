import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

/* import TableList from '../TableList/TableList' */
import CustomerSelection from './CustomerSelection'

class Customer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            customerType: 'person',
            firstName: '',
            lastName: '',
            nickName: '',
            birthDay: '',
            birthMonth: '',
            birthYear: '',
            personalDocument: '',
            socialSecurity: '',
            email: '',
            fixedPhonePrefix: '',
            fixedPhoneNumber: '',
            mobilePhonePrefix: '',
            mobilePhoneNumber: '',
            isActive: true
        }
    }

    getSelectValue = (option) => {
        this.setState({
            customerType: option.target.value
        })
    }
    
    render() {
        return (
            <div className="form-group margin-top-navbar-content">
                {/*this.props.action === 'list' && <TableList />*/}
                {
                    this.props.action === 'new' &&
                    <form>
                        <div>
                            <label htmlFor="selectCustomerType">Escolha o tipo de cliente:</label>
                            <select className="form-control" id="selectCustomerType" onChange={this.getSelectValue}>
                                <option value='person'>Pessoa Física</option>
                                <option value='company'>Pessoa Jurídica</option>
                            </select>
                        </div>
                    </form>
                }
                {
                    this.state.customerType === 'person' && 
                    <form className='needs-validation' onSubmit={this.submitHandler} noValidate>
                        <Person />
                    </form>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    customer: state.customer
})

export default withRouter(connect(mapStateToProps)(Customer))
