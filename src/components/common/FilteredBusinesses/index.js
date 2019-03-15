import React from 'react';
import BusinessCard from '../../../UI/BusinessCard/BusinessCard';
import Carousel from '../../../UI/Carousel/Carousel';

const FilteredBusinesses = props => {

    let items = 
    props.items ? props.items.map(item => {
        return (
            <div className='business-item' key={item.id}>
                <BusinessCard business={item} />
            </div>
        )
    })
    : null
    return (
        items ?
        <div className='filtered_businesses'>
            <div>{props.title}</div>
            <Carousel items={items} />
        </div>
        : null
    )
}

export default FilteredBusinesses;