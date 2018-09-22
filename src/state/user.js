const userState = {
    listAction: '/usuario',
    editAction: '/usuario/mostrar',
    saveAction: '/usuario/salvar',
    loginAction: '/usuario/entrar',
    credentialsAction: '/usuario/validar-credenciais',
    exportCSVAction: '/usuario/exportar-csv',
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
    loading: false,
    error: false,
    success: false,
    list: [],
    credentials: {},
    error_message: ''
}

export default userState