const customerState = {
    listAction: '/cliente',
    savePersoAction: '/cliente/salvar-cliente-pessoa',
    saveCompanyAction:  '/cliente/salvar-cliente-empresa',
    editPersonAction: '/cliente/mostrar-cliente-pessoa',
    editCompanyAction: '/cliente/mostrar-cliente-empresa',
    exportCSVAction: '/cliente/exportar-csv',
    csvFileName: 'listagem-de-clientes',
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
    error_message: '',
    person: {
        firstName: '',
        lastName: '',
        nickName: '',
        birthDay: '',
        birthMonth: '',
        birthYear: '',
        personalDocument: '',
        socialSecurity: '',
        email: '',
        fixedPhonePrefix: '',
        fixedPhoneNumber: '',
        mobilePhonePrefix: '',
        mobilePhoneNumber: '',
        isActive: true
    },
    company: {
        firstName: '',
        lastName: '',
        nickName: '',
        birthDay: '',
        birthMonth: '',
        birthYear: '',
        personalDocument: '',
        socialSecurity: '',
        email: '',
        fixedPhonePrefix: '',
        fixedPhoneNumber: '',
        mobilePhonePrefix: '',
        mobilePhoneNumber: '',
        isActive: true
    }
}

export default customerState