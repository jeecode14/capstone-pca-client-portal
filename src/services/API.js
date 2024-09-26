import axios from 'axios';
import tokenProvider from 'axios-token-interceptor';
// import moment from 'moment';
import { getToken } from './functions';
// import { getTokenMaxAge, getToken } from './functions';

/**
 * Axios instance
 * baseURL: root config
 */
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers.common['content-type'] = 'multipart/form-data';

const API = axios.create({
    baseURL: process.env.REACT_APP_API
});

/**
 * Interceptor to attach the auth token
 */
API.interceptors.request.use(
    tokenProvider({
        getToken: () => getToken(),
        getMaxAge: () => 999999999,
        headerFormatter: (token) => 'Token ' + token
        // getMaxAge: () => getTokenMaxAge()
    })
);

API.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // we can't seem to catch the 302 status code as an error,
        // however, since it redirects to another domain (login.microsoftonline.com) it causes
        // a CORS error which makes error.response be undefined here.  This assumes that any time
        // error.response is undefined that we need to redirect to the login page
        if (typeof error.response === 'undefined') {
            // window.location = 'https://login.microsoftonline.com';
            console.log(error);
            console.log(error.response);
            return error.response.data;
        } else {
            return Promise.reject(error.response.data);
        }
    }
);

/**
 * Interceptor to validate the validity of token
 */
API.interceptors.request.use(
    function (config) {
        // const expiry = localStorage.getItem('expiry');
        // const now = moment();
        // if (Date.parse(now) > Date.parse(expiry)) {
        //     if (window.confirm('Session has expired, do you want to re-login?')) {
        //         localStorage.removeItem('auth');
        //         localStorage.removeItem('expiry');
        //         return (window.location.href = '/login');
        //     }
        //     localStorage.removeItem('auth');
        //     localStorage.removeItem('expiry');
        // }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

export default API;
