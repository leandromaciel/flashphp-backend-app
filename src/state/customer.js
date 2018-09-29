const customerState = {
    listAction: '/cliente',
    savePersoAction: '/cliente/salvar-cliente-pessoa',
    saveCompanyAction:  '/cliente/salvar-cliente-empresa',
    editPersonAction: '/cliente/mostrar-cliente-pessoa',
    editCompanyAction: '/cliente/mostrar-cliente-empresa',
    exportCSVAction: '/cliente/exportar-csv',
    csvFileName: 'listagem-de-clientes',
    listCaption: 'Listagem de Clientes',
    csvHeader: [{
        dataField: 'firstName',
        text: 'Nome',
        sort: true
    }, {
        dataField: 'lastName',
        text: 'Sobrenome',
        sort: true
    }, {
        dataField: 'nickName',
        text: 'Apelido',
        sort: true
    }, {
        dataField: 'vatNumber',
        text: 'CNPJ',
        sort: true
    }],
    loading: false,
    error: false,
    success: false,
    list: [],
    credentials: {},
    error_message: '',
    person: {
        personDataIsSet: false,
        id: '',
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
        isActive: false
    },
    company: {
        companyDataIsSet: false,
        id: '',
        vatNumber: '',
        additionalVatNumber: '',
        taxRegiment: '',
        companyFixedPhonePrefix: '',
        companyFixedPhoneNumber: '',
        companyMobilePhonePrefix: '',
        companyMobilePhoneNumber: '',
        internalCode: '',
        companyEmail: '',
        companyType: '',
        companyCustomerType: '',
        salesman: '',
        isActive: false
    }
}

export default customerState