import axios from 'axios';
// const authToken = null;
 const instance = axios.create({
    baseURL: 'http://mock.khozinfo.com/api/v1'
    // baseURL: 'http://jsonplaceholder.typicode.com'
});

    
// password hash
//

// instance.defaults.headers.common['Authorization'] = 'token';
// instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

instance.interceptors.request.use(function (request){
  // if protected route
  // instance.defaults.headers.common['Authorization'] = 'Bearer ' + ContextService.getItem('access_token');
  return request;
}, function (error) {
  return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
    // Do something with response data
    // console.log('reso', response);
    return response;
  }, function (error) {
    // Do something with response error
    console.log('error', error.response);
    return Promise.reject(error);
  });
// instance.interceptors.response...
// export instance;

export default instance;