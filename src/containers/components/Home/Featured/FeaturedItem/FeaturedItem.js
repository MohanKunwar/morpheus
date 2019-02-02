import React from 'react';


class FeaturedItem extends React.Component {
render() {
    return (
        <div className='featured-item'>
            <img src={this.props.item.image} alt='this.props.item' />
            <span>{this.props.item.name}</span>
            <span>{this.props.item.title}</span>
            <span>{this.props.item.category}</span>
            <span>{this.props.item.total_views}</span> 
        </div>
    )
}
    
}

export default FeaturedItem;