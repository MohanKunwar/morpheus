import { instance, authInstance } from './Axios';
// import authInstance from './Axios';

const API = {
    business: {
        getBusinessUrl: 'businesses', // id is attached whenever called
    },
    common: {
        featuredUrl: 'businesses/featured',
        recentlyAddedUrl: 'businesses/latest',
        topLevelCategoriesUrl: 'categories/parent',
        getCategoryUrl: '/categories/', // id is attached whenever used
        getLocationsUrl: '/locations',
        getBannersUrl: '/banners'
    },
    product: {
        getProductUrl: slug => {
            return (`/products/${slug}`)
        }
    },
    requirement: {
        getUserRequirementsUrl: 'user/leads',
        getCloseReasonsUrl: '/lead-close-reasons',
        postUserRequirementUrl: '/leads',
        closeRequirementUrl: (id) => {
            return (`leads/${id}/close`)
        }
    },
    search: {
        getResults: (type, params) => {
            return (`search/${type}?${params}`)
        }
    },
    user: {
        // login registration logout
        loginUrl: '/login',
        refreshLoginUrl: '/login/refresh',
        registerUrl: '/register',
        getRegisterCodeUrl: '/user',
        confirmCodeUrl: '/user/mobile-confirmation',
        resendConfirmCodeUrl: '/user/mobile-confirmation/resend',
        getCodeForgotPasswordUrl: '/password/forgot',
        resetCodeForgotPasswordUrl: '/password/reset',
        logoutUrl: '/user/logout',
        // user actions
        getUserReviewsUrl: '/user/business-reviews',
        userDetailsUrl: '/user',
        editProfileUrl: '/user/profile',
        changePasswordUrl: '/user/password'
    }
}
const Axios = {
    instance, authInstance, API
}
export default Axios;