import axios from 'axios';
import UserService from './../User';

export const instance = axios.create({
    baseURL: 'http://mock.khozinfo.com/api/v1'
});

export const authInstance = axios.create({
    baseURL: 'http://mock.khozinfo.com/api/v1'
});

instance.interceptors.request.use(request => {
    return request;
}, error => {
    console.log('error', error)
    return error
});
instance.interceptors.response.use(response => {
    return response;
}, function (error) {
    // Do something with response error
    console.log('error is', error.response)
    return error
});
authInstance.interceptors.request.use(request => {
    // if protected route
    if (!request.headers.Authorization) {
        const token = UserService.getItem('access_token')

        if (token) {
            request.headers.Authorization = `Bearer ${token}`
        }
    }
    return request
},
    error => {
        console.log('auth route error request', error.response)
        return Promise.reject(error)
    }
);

authInstance.interceptors.response.use(function (response) {
    return response
}, error => {
    console.log('auth route error response', error.response)
    return error.response
});
