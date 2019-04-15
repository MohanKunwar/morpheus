import React from 'react'
import {NavHashLink as Link} from 'react-router-hash-link'
import {SmoothScrollLink} from 'organism-react-scroll-nav'
const BusinessNav = ({
    businessUrl, products, hotel
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
            <Link 
            to={`/business/${businessUrl}#overview`}
            scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
            activeClassName='nav_selected'
             className='sidebar_link'>Overview</Link>
            <Link 
            to={`/business/${businessUrl}#photos`}
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