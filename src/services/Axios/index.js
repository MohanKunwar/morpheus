import { instance, authInstance } from './Axios';
// import authInstance from './Axios';

const API = {
    user: {
        // login registration logout
        loginUrl: '/login',
        refreshLoginUrl: '/login/refresh',
        registerUrl: '/register',
        getRegisterCodeUrl: '/user',
        confirmCodeUrl: '/user/mobile-confirmation',
        resendConfirmCodeUrl: '/user/mobile-confirmation/resend',
        logoutUrl: '/user/logout',
        // user actions
        getUserReviewsUrl: '/user/business-reviews',
        getUserRequirementsUrl: 'user/leads',
        userDetailsUrl: '/user'
    },
    common: {
        featuredUrl: 'businesses/featured',
        recentlyAddedUrl: 'businesses/latest',
        topLevelCategoriesUrl: 'categories/parent',
        getCategoryUrl: '/categories/', // id is attached whenever used
        getLocationsUrl: '/locations'
    },
    business: {
        getBusinessUrl: 'businesses', // id is attached whenever called
    },
    search: {
        getResults: (type, params) => {
            return (`search/${type}?${params}`)
        }
    }
}
const Axios = {
    instance, authInstance, API
}
export default Axios;