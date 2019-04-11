import { instance, authInstance, signal, isCancel } from './Axios';
// import authInstance from './Axios';

const API = {
    business: {
        getBusinessUrl: businessUrl => { return `businesses/${businessUrl} ` }, 
        getBusinessProductsUrl: businessUrl => { return `businesses/${businessUrl}/products` },
        getRoomsUrl: businessSlug => { return `businesses/${businessSlug}/rooms` }
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
        getProductUrl: slug => { return `/products/${slug}` },
        getProductPhotosUrl: slug => { return `/products/${slug}/photos`}
    },
    requirement: {
        getUserRequirementsUrl: 'user/leads',
        getCloseReasonsUrl: '/lead-close-reasons',
        postUserRequirementUrl: '/leads',
        closeRequirementUrl: (id) => {
            return (`leads/${id}/close`)
        }
    },
    room: {
        getRoomUrl: slug => { return `/rooms/${slug}` },
        getRoomPhotosUrl: slug => { return `/rooms/${slug}/photos`},
        getRoomAmenitiesUrl: slug => { return `/rooms/${slug}/amenities` },
        getAllHotelAmenitiesUrl: '/hotels/amenities',
        getAllHotelRoomAmenitiesUrl: '/hotel-rooms/amenities',
        createReservationUrl: 'hotel-reservations',
        cancelBookingUrl: id => { return `hotel-reservations/${id}/cancel` }
    },
    search: {
        getResults: (type, params) => {
            return (`search/${type}?${params}`)
        },
        // getRoomsResults: (checkin, checkout, location) => {
        //     return `search/room?checkin=${checkin}&checkout=${checkout}&location_id=${location}`
        // }
        getRoomsResults: (params) => {
            return `search/room?${params}`
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
        changePasswordUrl: '/user/password',
        userBookingsUrl: '/user/hotel-reservations'
    }
}

const Axios = {
    instance, authInstance, API, signal, isCancel
}
export default Axios;