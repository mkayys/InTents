import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
// import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    // TESTING START
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TESTING END

    ReactDOM.render(<Root store={store} />, root);
});