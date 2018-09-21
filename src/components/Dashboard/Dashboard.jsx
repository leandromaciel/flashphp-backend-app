import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        return (
            <div className="margin-top-navbar-login">
                você está no painel
            </div>
        )
    }
}

const mapStateToProps = state => ({
    dashboard: state.dashboard
})

export default withRouter(connect(mapStateToProps)(Dashboard))
