import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Dashboard extends Component {

    constructor(props) {
        super(props)

        if (this.props.user.credentials.AUTHORIZED === false) {
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div className="margin-top-navbar-login">
                você está no painel
            </div>
        )
    }
}

const mapStateToProps = state => ({
    dashboard: state.dashboard,
    user: state.user
})

export default withRouter(connect(mapStateToProps)(Dashboard))
