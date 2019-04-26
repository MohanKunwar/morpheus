import { instance, authInstance, signal } from './Axios';

const API = {
    business: {
        getBusinessUrl: businessUrl => { return `businesses/${businessUrl} ` },
        getBusinessProductsUrl: businessUrl => { return `businesses/${businessUrl}/products` },
        getRoomsUrl: businessSlug => { return `businesses/${businessSlug}/rooms` },
        getHoursUrl: businessSlug => { return `businesses/${businessSlug}/hours`}
    },
    businessEdit: {
        deletePhotoUrl: (slug, id) => { return `businesses/${slug}/photos/${id}` },
        uploadImagesUrl: slug => { return  `businesses/${slug}/photos`},
        editLogoUrl: slug => { return `businesses/${slug}/logo`},
        editCoverUrl: slug => { return `businesses/${slug}/cover`},
        editHoursUrl: slug => {return `businesses/${slug}/hours`}
    },
    businessEdit: {
        deletePhotoUrl: (slug, id) => { return `businesses/${slug}/photos/${id}` },
        uploadImagesUrl: slug => { return  `businesses/${slug}/photos`},
        getDealsInUrl: slug => { return `businesses/${slug}/dealsin/edit`}
    },
    businessEdit: {
        deletePhotoUrl: (slug, id) => { return `businesses/${slug}/photos/${id}` },
        uploadImagesUrl: slug => { return  `businesses/${slug}/photos`},
        getDealsInUrl: slug => { return `businesses/${slug}/dealsin/edit`}
    },
    common: {
        featuredUrl: 'businesses/featured',
        recentlyAddedUrl: 'businesses/latest',
        topLevelCategoriesUrl: 'categories/parent',
        getCategoryUrl: id => { return `/categories/${id}/children` },
        getLocationsUrl: '/locations',
        getBannersUrl: '/banners'
    },
    product: {
        getProductUrl: slug => { return `/products/${slug}` },
        getProductPhotosUrl: slug => { return `/products/${slug}/photos` },
        deleteProductPhotoUrl: (businessId, photoId) => { return `businesses/${businessId}/product-photos/${photoId}` }
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
        getRoomPhotosUrl: slug => { return `/rooms/${slug}/photos` },
        getRoomAmenitiesUrl: slug => { return `/rooms/${slug}/amenities` },
        getAllHotelAmenitiesUrl: '/hotels/amenities',
        getHotelAmenitiesUrl: slug => { return `/businesses/${slug}/amenities`},
        getHotelReservationsUrl: slug => { return `/hotels/${slug}/reservations`},
        getAllHotelRoomAmenitiesUrl: '/rooms/amenities',
        createReservationUrl: 'hotel-reservations',
        cancelBookingUrl: id => { return `hotel-reservations/${id}/cancel` },
        createAddRoomUrl: id => { return `hotels/${id}/rooms` }
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
    instance, authInstance, API, signal
}
export default Axios;