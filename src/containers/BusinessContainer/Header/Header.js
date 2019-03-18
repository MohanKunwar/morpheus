import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Img from 'react-image';
import star from './../../../assets/images/ratings.svg';

const Stars = () =>{
    return(
        <Img src={star} className="star-css" />
    )
}

const GetIcon = props => {
    console.log('url for icons', props.url);
    const url = props.url;
    if (url.includes('facebook')) {
        return (<Img src={require('./../../../assets/images/facebook.svg')}
            alt="facebook" className="social-icons" onClick={() => window.open(url)} />);
    }
    if (url.includes('twitter')) {
        return (<img src={require('./../../../assets/images/twitter.svg')}
            alt="twitter" className="social-icons" onClick={() => window.open(url)} />);
    }
    if (url.includes('instagram')) {
        return (<img src={require('./../../../assets/images/instagram.svg')}
            alt="instagram" className="social-icons" onClick={() => window.open(url)} />);
    }
}

const Header = (props) => {
    console.log('heaer props', props);
    let header = null; let socialLinks = null;
    if (props.business !== null) {
        if (props.business.social_links.length > 0) {
            socialLinks = props.business.social_links.map((link, index) => {
                return (<GetIcon key={index} url={link} />)
            });
        }
        header = (
            <div className='card-business-header'>
                <div className='business-profile-image'>
                    <Img className='business-logo' src={props.business.logo} alt={props.business.name} />
                    {
                        props.isUserOwner
                            ? <button>edit</button>
                            : null
                    }
                </div>
                <div className='business-header-right'>
                    <div className='business-info'>
                        <p className='business-title'>{props.business.name}</p>
                        {
                            props.isUserOwner
                                ? <button>edit</button>
                                : null
                        }
                        <p className='business-address'>{props.business.address}</p>
                        {
                            props.isUserOwner
                                ? <button>edit</button>
                                : null
                        }
                        <Link to={`/search/business?category=${props.business.category.slug}`} className='business-category'>{props.business.category.name}</Link><br />
                        <p className="business_view_count">
                        {props.business.view_count} views</p>
                        <p className="business_rating">
                        <Stars />
                        {props.business.rating_avg} rating 
                        <Link to={`./reviews`} className="review_link">{props.business.review_count} reviews</Link></p>
                    </div>
                    <div className='business-social'>
                        <div className='social-links'>
                            {socialLinks}
                            {
                                props.isUserOwner
                                    ? <button>edit</button>
                                    : null
                            }
                        </div>
                        <p className="business_report">Report</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        header
    )
}
export default Header;

// address: "18671 Schinner Mews Suite 637↵Nelsfort, DC 55189-0451"
// category:
// created_at: "2019-02-04 04:57:10"
// icon: "fa fa-icon"
// id: 2
// name: "Household"
// parent: {id: null}
// slug: "household"
// type: null
// updated_at: "2019-02-04 04:57:10"
// __proto__: Object
// cover: "http://mock.khozinfo.com/storage/businesses/6SLiOA2TLyzdtdECPXafZEa725VIPtQr4un2gDXA.jpeg"
// created_at: "2019-02-04 04:57:10"
// description: "Sint ut facilis occaecati qui harum neque et. Consequatur et rerum vel nihil voluptatem. Quia quam ullam quo error nisi modi. Vitae iusto dolores veniam sed earum vitae. Incidunt totam est in deleniti."
// email: "cparisian@example.net"
// establishment_year: "1990"
// feature_hotel_enabled: false
// feature_restaurant_enabled: false
// featured: false
// hours_always_open: false
// hours_url: "http://mock.khozinfo.com/api/v1/businesses/davis-ltd/hours"
// id: 12
// landmark: ""
// latitude: -71.315495
// location:
// created_at: "2019-02-04 04:57:09"
// id: 1
// name: "North Kellieland"
// updated_at: "2019-02-04 04:57:09"
// __proto__: Object
// logo: "http://mock.khozinfo.com/storage/businesses/3x1halsIXdhqdxKAXQBWfI65DLFBf73t1WVzRyro.jpeg"
// longitude: -23.073045
// mobile_number: "(679) 807-7410 x788"
// name: "Davis Ltd"
// phone_number: "(436) 533-5788 x10979"
// photos_url: "http://mock.khozinfo.com/api/v1/businesses/davis-ltd/photos"
// rating_avg: 0
// review_count: 0
// reviews_url: "http://mock.khozinfo.com/api/v1/businesses/davis-ltd/reviews"
// slug: "davis-ltd"
// social_links: Array(3)
// 0: "https://www.facebook.com/khozinfo"
// 1: "https://www.twitter.com/khozinfo"
// 2: "https://www.instagram.com/khozinfo"
// length: 3
// __proto__: Array(0)
// status: "approved"
// tags: []
// updated_at: "2019-02-04 04:57:14"
// url: "http://mock.khozinfo.com/api/v1/businesses/davis-ltd"
// verified_at: null
// view_count: 20
// website: "ebert.org"