import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        if ( typeof this.props.user.credentials.AUTHORIZED === 'undefined' ) {
            this.props.history.push('/')
        }

        console.log(this.props)
    }
    
    render() {
        return (
            <div>
                <Link to='/usuario'>usuarios</Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    dashboard: state.dashboard
})

export default withRouter(connect(mapStateToProps)(Dashboard))