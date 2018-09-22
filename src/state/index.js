import customerState from './customer'
import userState from './user'
import dashboardState from './dashboard'

const initialState = {
    config: {
        baseUrl: 'http://192.168.1.5/flashphp/public/backend',
        networkError: false,
        networkErrorMessage: 'Estamos com falhas na conexão, por favor avise seu administrador.'
    },
         
    user: userState,
    customer: customerState,
    dashboard: dashboardState
}

export default initialState