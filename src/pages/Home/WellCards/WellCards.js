import React from "react";
import './WellCards.css';
const WellCards = (props) => {
  return (
    <div className="well-cards">
      <div className="well-card">
        {/* <img src=''></img> */}
        <span className="well-card-text">
          Hotel Booking
        </span>
      </div>
      <div className="well-card">
        <span className='well-card-text'>
          Food Ordering
        </span>
      </div>
      <div className="well-card">
        {/* <img src=''></img> */}
        <span className="well-card-text">Facebook Boosting</span>
      </div>
    </div>
  );
}
export default WellCards;
