import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import MainMenu from '../MainMenu/MainMenu'
import TableList from '../TableList/TableList'
import UserForm from './UserForm'

class User extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            urlList: this.props.baseUrl+'/usuario',
            urlEdit: '/usuario/editar',
            urlSaveData: this.props.baseUrl+'/usuario/editar',
            urlExportCSV: this.props.baseUrl+'/usuario/exportar-csv',
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
            serverResponse: []
        }
    }

    componentWillMount() {
        let fetchData = {}

        if (this.props.action === 'list') {
           fetchData  = {
                url: this.state.urlList,
                params: {
                    method: 'GET'
                }
            }
        } else {
            const serverData = {
                listIds: localStorage.getItem('userListIds').split(',')
            }

            fetchData = {
                url: this.state.urlExportCSV,
                params: {
                    method: 'POST',
                    body: JSON.stringify(serverData)
                }
            }
        }

        fetch(fetchData.url, fetchData.params)
        .then((response) => {
            if ( response.status === 200 ) {
                return response.json();
            }
        })
        .then((responseJSON) => {
            this.setState({
                serverResponse: responseJSON
            })
        })
        .catch((responseError) => {
            this.setState({
                error: responseError
            })
        })
    }

    render() {
        return (
            <Fragment>
                <MainMenu />
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
        )
    }
}

export default withRouter(User)
