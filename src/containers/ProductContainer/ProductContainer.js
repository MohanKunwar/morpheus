import React, { Component } from 'react';
import Axios from '../../services/Axios';
import Spinner from '../../helpers/Spinner';

class ProductContainer extends Component {
    state = {
        product: null,
        photos: null
    }
    componentWillMount() {
        const { match: { params } } = this.props;
        Axios.instance.get(Axios.API.product.getProductUrl(params.id)).then(
            response => {
                if (response && response.data) {
                    this.setState({ product: response.data.data })
                    Axios.instance.get(this.state.product.photo).then(
                        response => {
                            if (response && response.data) {
                                this.setState({ photos: response.data.data })

                            }
                        }
                    )
                }
            }
        )
    }
    render() {
        return (
            <div className='card-container'>
                {
                    this.state.product
                        ?
                        <div className='product-container'>
                            <h2>{this.state.product.name}</h2>
                            <div className='product-images'>
                                {
                                    this.state.photos
                                        ?
                                        <span>images goes here</span>
                                        :
                                        <span>Placeholder</span>
                                }
                            </div>
                            <span>{this.state.product.price}</span>
                            <span>{this.state.product.description}</span>
                            
                        </div>
                        : <Spinner />
                }
            </div>

        )
    }
}
export default ProductContainer;

// "data": {
//     "id": 1,
//     "business": {
//         "id": 120,
//         "logo": "https://mock.khozinfo.com/storage/businesses/OhC9Mv7dyOxT6F75tmK66ottDOX1pmkGRR6OnRP1.jpeg",
//         "cover": "https://mock.khozinfo.com/storage/businesses/lNnCnBL7tTsiLK4QxfxsST09TDvxFmBs11IOWeFK.jpeg",
//         "url": "https://mock.khozinfo.com/api/v1/businesses/koelpin-wilkinson",
//         "photos_url": "https://mock.khozinfo.com/api/v1/businesses/koelpin-wilkinson/photos",
//         "reviews_url": "https://mock.khozinfo.com/api/v1/businesses/koelpin-wilkinson/reviews",
//         "hours_url": "https://mock.khozinfo.com/api/v1/businesses/koelpin-wilkinson/hours",
//         "dealsin_url": "https://mock.khozinfo.com/api/v1/businesses/koelpin-wilkinson/dealsin",
//         "name": "Koelpin-Wilkinson",
//         "slug": "koelpin-wilkinson",
//         "category": {
//             "id": 134,
//             "name": "Training, Education & Supplies",
//             "slug": "training-education-supplies",
//             "icon": "flaticon-cap",
//             "icon_svg": "https://mock.khozinfo.com/static/assets/img/default-icon.svg",
//             "parent": {
//                 "id": null
//             },
//             "type": null,
//             "created_at": "2018-10-30 17:41:02",
//             "updated_at": "2019-03-10 05:02:08"
//         },
//         "location": {
//             "id": 3,
//             "photo": "https://mock.khozinfo.com/static/assets/img/khozinfo-location-placeholder.jpg",
//             "name": "McGlynnland",
//             "created_at": "2019-03-10 09:11:00",
//             "updated_at": "2019-03-10 09:11:00"
//         },
//         "email": "pete.stamm@example.com",
//         "website": "hagenes.com",
//         "phone_number": "554.589.5474 x620",
//         "mobile_number": "942-818-1973 x529",
//         "address": "58113 Dooley Island\nKihnborough, IL 36956",
//         "latitude": -56.305157,
//         "longitude": 15.937016,
//         "landmark": "",
//         "establishment_year": "1990",
//         "description": "Culpa recusandae amet ut qui dolorum. Rerum aut qui dolorum laudantium at. Quam aliquam numquam quibusdam magni dolores aut. Et ut voluptate minus. Eius nesciunt aut asperiores sit quis quam animi. Quis officia officia quasi qui dolor. Et aliquid sequi voluptas ipsam consequatur vel. Doloribus itaque eum dolores ab sed ad laudantium repellat. Molestiae assumenda voluptas nobis illo nemo aliquam in.",
//         "tags": [],
//         "social_links": [],
//         "verified_at": null,
//         "status": "approved",
//         "featured": false,
//         "hours_always_open": false,
//         "view_count": 20,
//         "review_count": 15,
//         "rating_avg": "2.6",
//         "feature_enabled": [],
//         "created_at": "2019-03-10 09:11:10",
//         "updated_at": "2019-03-10 09:19:34"
//     },
//     "photo": "https://mock.khozinfo.com/storage/products/XBeP5b5krP3u7mIvE5YShh5WLjzpwxe3CjZ2tZNF.jpeg",
//     "name": "Koch Ltd",
//     "slug": "koch-ltd",
//     "price": "1201.00",
//     "description": "Adipisci excepturi praesentium fugit incidunt asperiores distinctio consequuntur. Autem modi ut quia iusto culpa quas numquam neque. Nihil occaecati saepe qui. In explicabo tenetur tenetur. Officia atque soluta quaerat ex expedita. Et voluptatem quaerat repudiandae illum fuga eum quidem. Quisquam fugiat nemo maiores labore.",
//     "categories": [],
//     "created_at": "2019-03-10 09:19:38",
//     "updated_at": "2019-03-10 09:19:38"
// }