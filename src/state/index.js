const initialState = {
    user: {
        baseUrl: 'http://192.168.1.5/flashphp/public/backend',
        listUrlAction: '/usuario',
        loginUrlAction: '/usuario/entrar',
        credentialsUrlAction: '/usuario/validar-credenciais',
        loading: false,
        error: false,
        list: [],
        credentials: {},
        error_message: ''
    },

    dashboard: {
        baseUrl: 'urldeteste'
    }
}

export default initialState