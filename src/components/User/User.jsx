import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as userActions from '../../actions/user'
import TableList from '../TableList/TableList'

class UserList extends Component {
    constructor(props) {
        super(props)

        this.getUserList()

        this.state = {
            urlList: this.props.config.baseUrl+this.props.user.listAction,
            urlEdit: this.props.config.baseUrl+this.props.user.editAction,
            urlSaveData: this.props.config.baseUrl+this.props.user.saveAction,
            urlExportCSV: this.props.config.baseUrl+this.props.user.exportCSVAction,
            csvFileName: this.props.user.csvFileName,
            csvHeader: this.props.user.csvHeader,
        }
    }

    getUserList = () => {
        this.props.requestUserList()
    }

    render() {
        return (
            <div>
                {this.props.user.list && <TableList configData={this.state} data={this.props.user.list} />}    
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(userActions, dispatch)

const mapStateToProps = state => ({
    config: state.config,
    user: state.user
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList))