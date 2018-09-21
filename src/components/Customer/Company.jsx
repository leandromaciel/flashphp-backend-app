import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Company extends Component {
    
    render() {
        return (
            <div>
                Emmpresa na área
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    customer: state.customer
})

export default withRouter(connect(mapStateToProps)(Company))
