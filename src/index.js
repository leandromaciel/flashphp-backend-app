import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store, history }  from './store/index'
import { ConnectedRouter } from 'connected-react-router'

import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

import App from './App';
import './App.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
