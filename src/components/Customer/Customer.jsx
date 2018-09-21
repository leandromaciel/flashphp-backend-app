import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Person from './Person'
import Company from './Company'

class Customer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customerType: 'person'
        }
    }

    getSelectValue = (option) => {
        this.setState({
            customerType: option.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form>
                    <div className="form-group margin-top-navbar-content">
                        <label htmlFor="selectCustomerType">Escolha o tipo de cliente:</label>
                        <select className="form-control" id="selectCustomerType" onChange={this.getSelectValue}>
                            <option value='person'>Pessoa Física</option>
                            <option value='company'>Pessoa Jurídica</option>
                        </select>
                    </div>
                </form>
                <div>
                    {this.state.customerType === 'person' && <Person />}
                    {this.state.customerType === 'company' && <Company />}
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    customer: state.customer
})

export default withRouter(connect(mapStateToProps)(Customer))
