import React from 'react';
import { Link } from 'react-router-dom'
import Img from 'react-image';
import star from './../../../assets/images/ratings.svg';

const Stars = () => {
    return (
        <Img src={star} className="star-css" />
    )
}

const GetIcon = props => {
    console.log('url for icons', props.url);
    const url = props.url;
    if (url.includes('facebook')) {
        return (<Img src={require('./../../../assets/images/facebook.svg')}
            alt="facebook" className="social_icons" onClick={() => window.open(url)} />);
    } else if (url.includes('twitter')) {
        return (<img src={require('./../../../assets/images/twitter.svg')}
            alt="twitter" className="social_icons" onClick={() => window.open(url)} />);
    } else if (url.includes('instagram')) {
        return (<img src={require('./../../../assets/images/instagram.svg')}
            alt="instagram" className="social_icons" onClick={() => window.open(url)} />);
    } else if (url.includes('tripadvisor')) {
        // todo tripadvisor image
        return (<img src={require('./../../../assets/images/instagram.svg')}
            alt="instagram" className="social_icons" onClick={() => window.open(url)} />);
    } else {
        // todo website image
        return (<img src={require('./../../../assets/images/instagram.svg')}
            alt="instagram" className="social_icons" onClick={() => window.open(url)} />);
    }
}

const BusinessHeader = (props) => {
    let header = null; let socialLinks = null;
    if (props.business !== null) {

        if (props.business.social_links.length > 0) {
            socialLinks = props.business.social_links.map((link, index) => {
                return (<GetIcon key={index} url={link} />)
            });
        }
        header = (
            <div className='business_header'>
                <div className='business_info'>
                    <h4>{props.business.name}</h4>
                    <h5>{props.business.address}</h5>
                    <Link 
                        to={`/search/business?category=${props.business.category.slug}`} 
                        className='business_category'><h5>{props.business.category.name}</h5></Link>
                    <h6>{props.business.view_count} views</h6>
                    <h6>
                        <Stars />
                        {props.business.rating_avg} rating
                        <Link to={`/business/${props.business.slug}#reviews`} className="review_link">{props.business.review_count} reviews</Link></h6>
                </div>
                <div className='business_social'>
                    <div className='social_links'>
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
        )
    }
    return (
        header
    )
}
export default BusinessHeader