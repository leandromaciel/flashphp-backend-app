import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TableList from '../TableList/TableList'

import * as userActions from '../../actions/user'


class User extends Component {
    constructor(props) {
        super(props)

        if ( typeof this.props.user.credentials.AUTHORIZED === 'undefined' ) {
            this.props.history.push('/')
        }

        this.getUserList()

        this.state = {
            urlList: this.props.user.baseUrl+this.props.user.listUrlAction,
            urlEdit: '/usuario/editar',
            urlSaveData: this.props.user.baseUrl+'/usuario/editar',
            urlExportCSV: this.props.user.baseUrl+'/usuario/exportar-csv',
            csvFileName: 'listagem-de-usuarios',
            csvHeader: [{
                dataField: 'id',
                text: 'ID Usuario',
                sort: true
            }, {
                dataField: 'login',
                text: 'Login',
                sort: true
            }, {
                dataField: 'created_at',
                text: 'Criado em',
                sort: true
            }, {
                dataField: 'updated_at',
                text: 'atualizado em',
                sort: true
            }],
        }
    }

    getUserList = () => {
        this.props.requestUserList()
    }

    componentDidUpdate() {
        if (!this.props.user.credentials.AUTHORIZED) {
            this.props.history.push('/')
        }
    }

    render() {
        return (
<<<<<<< HEAD:src/components/User/User.jsx
            <Fragment>
                {
                    this.props.action === 'list'
                    ?
                    <TableList configData={this.state} />
                    :
                    this.state.serverResponse.map((userData, indice) => 
                        <UserForm 
                            key={userData.id}
                            urlSaveData={this.state.urlSaveData}
                            data={userData} />
                    )
                }
            </Fragment>
=======
            <div>
                {this.props.user.list && <TableList configData={this.state} data={this.props.user.list} />}    
            </div>
>>>>>>> 5311ae2bc8d5bbeab5bf93767b88d8c262c1910f:src/containers/User/User.jsx
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(userActions, dispatch)

const mapStateToProps = state => ({
    user: state.user
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User))