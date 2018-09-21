import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Person extends Component {
    
    render() {
        return (
            <div>
                Pessoa na área
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    customer: state.customer
})

export default withRouter(connect(mapStateToProps)(Person))
