import React, { Component } from 'react';
// import FeaturedItem from './FeaturedItem/FeaturedItem';
import axios from './../../../../axios';
import API from './../../../../api';
import BusinessCard from './../../../../UI/BusinessCard/BusinessCard';
import './Featured.css';

class Featured extends Component {
    state = {
        featuredItems: []
    }
    componentWillMount() {
        // get featured items 
        axios.get(API.common.featuredUrl).then(response => {
            if (response) {
                console.log('featured templae', response.data.data);
                this.setState({
                    // response.data.data format
                    // address: "8641 Welch Knoll Suite 459↵Port Scotty, KS 64553-9615"
                    // category: {id: 2, name: "Household", slug: "household", icon: "fa fa-icon", parent_id: null, …}
                    // cover: "http://mock.khozinfo.com/storage/businesses/bPokTWj8FE6sNyZbvyP054BPo3KSQU4tfIItTFCd.jpeg"
                    // created_at: "2019-02-04 04:57:10"
                    // description: "Aut velit sed voluptas et perspiciatis labore doloremque. Modi sit dignissimos unde veniam quo. Neque qui facere eveniet reiciendis voluptas molestiae. Voluptas omnis possimus quam illum adipisci. Dolor doloremque alias quibusdam fuga similique et cumque. Aspernatur deserunt eligendi voluptatem quos. Nobis esse fugiat et. Repellat cupiditate omnis animi labore cupiditate."
                    // email: "augustine.kozey@example.org"
                    // establishment_year: "2005"
                    // feature_hotel_enabled: false
                    // feature_restaurant_enabled: false
                    // featured: true
                    // hours_always_open: false
                    // hours_url: "http://mock.khozinfo.com/api/v1/businesses/koss-goodwin-and-bogisich/hours"
                    // id: 4
                    // landmark: ""
                    // latitude: 16.88922
                    // location: {id: 1, name: "North Kellieland", created_at: "2019-02-04 04:57:09", updated_at: "2019-02-04 04:57:09"}
                    // logo: "http://mock.khozinfo.com/storage/businesses/H0KITasTPT6h8f74VPpWo6kapAxAmJYaVSwnWbXz.jpeg"
                    // longitude: 78.084933
                    // mobile_number: "+1-989-860-7630"
                    // name: "Koss, Goodwin and Bogisich"
                    // phone_number: "215.491.1461 x18622"
                    // photos_url: "http://mock.khozinfo.com/api/v1/businesses/koss-goodwin-and-bogisich/photos"
                    // reviews_url: "http://mock.khozinfo.com/api/v1/businesses/koss-goodwin-and-bogisich/reviews"
                    // slug: "koss-goodwin-and-bogisich"
                    // social_links: []
                    // status: "approved"
                    // tags: []
                    // total_view: 20
                    // updated_at: "2019-02-12 05:34:36"
                    // url: "http://mock.khozinfo.com/api/v1/businesses/4"
                    // verified_at: null
                    // website: "stanton.org"
                    featuredItems: response.data.data.map(item => {
                        return {
                            name: item.name,
                            id: item.id,
                            categoryName: item.category.name,
                            address: item.address,
                            image: item.logo,
                            totalView: item.total_view
                        }
                    })
                });
            }
        })
    }

    render() {
        console.log('featured in render', this.state.featuredItems);
        let items = null;
        if (this.state.featuredItems.length > 0) {
            items = this.state.featuredItems.map(item => {
                return (
                    <div className='featured-item' key={item.id}>
                        <BusinessCard business={item} />
                    </div>
                );
            })
        } else {
            return null;
        }
        return (
            <div className='featured'>
                {items}
            </div>);
    }
}

export default Featured;