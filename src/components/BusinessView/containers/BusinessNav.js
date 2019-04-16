import React from 'react'
import { NavHashLink as Link } from 'react-router-hash-link'
import Img from 'react-image';
import { SmoothScrollLink } from 'organism-react-scroll-nav'
const BusinessNav = ({
    business, products, hotel
}) => {
    return (
        <div id='nav-parent' className='business_nav'>
            {/* <SmoothScrollLink
                scrollRefId="nav-parent"
                targetId="overview"
            >
                Overview
            </SmoothScrollLink>
            
            <SmoothScrollLink
                scrollRefId="nav-parent"
                targetId='photos'
            >
                photos
            </SmoothScrollLink>
            
            
        </div> */}

            <Img className='business_logo'
                src={business.logo ? business.logo : require('../../../assets/images/khoz-ph.jpg')}
                alt={business.name}
            />
            <Link
                to={`/business/${business.slug}#overview`}
                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                activeClassName='nav_selected'
                className='sidebar_link'>Overview</Link>
            <Link
                to={`/business/${business.slug}#photos`}
                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })} className='sidebar_link'>Photos</Link>
            <span className='sidebar_link' >Reviews</span>
            <span className='sidebar_link'>Deals In</span>
            {
                products ?
                    <span className='sidebar_link'>Products</span>
                    :
                    null
            }
            {
                hotel ?
                    <span className='sidebar_link'>Rooms</span>
                    :
                    null
            }
        </div>
    )
}
export default BusinessNav