const API = {
    user: {
        loginUrl: '/login',
        refreshLoginUrl: '/login/refresh',
        registerUrl: '/register',
        getRegisterCodeUrl: '/user',
        confirmCodeUrl: 'user/mobile-confirmation',
        resendConfirmCodeUrl: 'user/mobile-confirmation/resend',
        logoutUrl: 'user/logout'
    },
    common: {
        featuredUrl: 'businesses/featured'
    }
}
export default API;