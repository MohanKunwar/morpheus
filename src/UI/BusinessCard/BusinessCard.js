import React, { Component } from "react";
import Img from "react-image";
import { Link } from "react-router-dom";
import star from "./../../assets/images/ratings.svg";
import "./BusinessCard.css";

const Star = () => {
  const rating = 5;
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<Img key={i} src={star} className="star-css" />);
  }
  return <span>{stars}</span>;
};

const BusinessCard = props => {
  return (
    <div className="business-card">
      <div className="business_img_container">
        {props.business.logo ? (
          <Img src={props.business.logo} alt={props.business.name} />
        ) : (
          <Img
            src={require("../../assets/images/khoz-ph.jpg")}
            alt={props.business.name}
          />
        )}
      </div>
      <div className="business-card-info">
        <Link
          className="search-item"
          key={props.index}
          to={`/business/${props.business.slug}`}
        >
          <div className="business_heading">{props.business.name}</div>
        </Link>
        <div className="business_address">
          <Link
            className="search-item"
            key={props.index}
            to={`/business/${props.business.slug}`}
          >
            {props.business.address}
          </Link>
        </div>
        <Link
          to={`/search/business?category=${props.business.category.slug}`}
          className="business_categories"
        >
          {props.business.category.name}
        </Link>
        <Link
          to={`/search/business?location=${props.business.location.name}`}
          className="business_location"
        >
          {props.business.location.name}
        </Link>
        <p className="business_view">{props.business.view_count} views</p>
        <Link
          to={`/business/${props.business.slug}/reviews`}
          className="business_review_rating"
        >
          <p className="business_rating">
            <Star business={props.business.rating_avg} />
          </p>
          <p className="business_review">
            {props.business.review_count} reviews
          </p>
        </Link>
      </div>
    </div>
  );
};
export default BusinessCard;
