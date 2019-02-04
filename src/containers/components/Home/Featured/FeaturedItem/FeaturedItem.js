import React from 'react';
import BusinessCard from './../../../../../UI/BusinessCard/BusinessCard';

class FeaturedItem extends React.Component {


render = () => {
    return (
        <div className='featured-item'>
        {/* <BusinessCard 
            imageSrc={this.props.item.image}
            businessUrl={this.props.item.businessUrl}
            name={this.props.item.name}
            title={this.props.item.title}
            categoryName={this.props.item.categoryName}
            categoryUrl={this.props.item.categoryUrl}
            totalViews={this.props.item.total_views} 
            ></BusinessCard> */}
            {/* <img src={this.props.item.image} alt='this.props.item' style={{maxWidth:'100%'}} /> */}
            
        </div>
    )
}
    
}

export default FeaturedItem;