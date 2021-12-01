import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app.js';
import { FirebaseProvider, AuthProvider } from './js/util';
import { store } from './js/store/store.js';

import './scss/index.scss';



ReactDOM.render(
    <Provider store={store}>
        <FirebaseProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </FirebaseProvider>
    </Provider>,
    document.getElementById('root')
);
