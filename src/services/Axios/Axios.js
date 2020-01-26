import axios from 'axios';
import UserService from './../User';

export const instance = axios.create({
    baseURL: 'base URL goes here'
});

export const authInstance = Object.create(instance);


export const signal = axios.CancelToken.source()
// export const isCancel = error => axios.isCancel(error)
instance.interceptors.request.use(request => {
    return request;
}, error => {
    console.log('error', error)
    // todo
    // switch (error.response.status) {
    //     case 401: {
    //         break
    //     }
    //     default: {
    //         return error.response
    //     }
    // }
    return error.response
});
instance.interceptors.response.use(response => {
    return response;
}, function (error) {
    // Do something with response error
    console.log('error is', error.response)
    return error.response
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
        return error.response
    }
);

authInstance.interceptors.response.use(function (response) {
    return response
}, error => {
    console.log('auth route error response', error.response)
    return error.response
});
