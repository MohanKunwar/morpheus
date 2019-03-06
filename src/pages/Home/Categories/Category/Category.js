import React, { Component } from 'react';
import './Category.css';

import axios from './../../../../axios';
import API from './../../../../api';

class Category extends Component {
    state = {
        subCategories: [],
        hover: false,
        categoryItems: null
    }

    loadSubCategories(id) {
        this.setState({ hover: true });
        if (this.state.subCategories.length === 0) {
            axios.get(API.common.getCategoryUrl + id + '/children').then(response => {
                //  console.log('response from sub categories', response.data.data)
                // let categoriesArray = [];
                // categoriesArray.push(response.data.data);
                // console.log('array', categoriesArray);
                this.setState({ subCategories: response.data.data });
            });
        }
    }
    render() {
        let categoryItems = null;

        if (this.state.hover && this.state.subCategories.length > 0) {

            // console.log('abc from categories sub', this.state.subCategories);
            categoryItems = this.state.subCategories.map((item, index) => {
                // console.log('category', item);
                return (
                    <div className='sub-category-btn' key={index}>
                        <span>{item.name}</span>
                    </div>
                );
            })
        } else {
            // todo
            // <Spinner />
        }
        return (
            <div className='category-btn' onMouseEnter={() => this.loadSubCategories(this.props.id)}
                onMouseLeave={() => this.setState({ hover: false })}>{this.props.name}
                <div className='sub-categories'>
                    {categoryItems}
                </div>
                {/* implement popover component 
                    todo
                */}
            </div>
        );
    }
}
export default Category;