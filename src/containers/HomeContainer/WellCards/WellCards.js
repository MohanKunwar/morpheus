import React from 'react'
import './WellCards.css'
import Link from 'react-router-dom/Link'
import {FaBuilding, FaUtensils, FaFacebookF} from 'react-icons/fa'
const WellCards = () => {
  return (
    <div className='well-cards'>
      <div className='well-card'>
      <div className='wellcard-food-icon'><FaUtensils /></div>
        <div className='well-card-text'>
          Food Ordering
        </div>
      </div>
      <div className='well-card'>
        <div className='wellcard-hotel-icon'><FaBuilding /></div>
        <Link to={'search/room'} className='well-card-text'>
          Hotel Booking
        </Link>
      </div>
      <div className='well-card'>
        <div className='wellcard-facebook-icon'><FaFacebookF /></div>
        <span className='well-card-text'>Facebook Boosting</span>
      </div>
    </div>
  )
}
export default WellCards
