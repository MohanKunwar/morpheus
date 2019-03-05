import React, { Component } from 'react';
import './Category.css';

import Axios from '../../../../services/Axios';

class Category extends Component {
    state = {
        subCategories: [],
        hover: false,
        categoryItems: null
    }

    loadSubCategories(id) {
        this.setState({ hover: true });
        if (this.state.subCategories.length === 0) {
            Axios.instance.get(Axios.API.common.getCategoryUrl + id + '/children').then(response => {
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
                {/* <i className="fa fa-chevron-right chevron_icon"></i> */}
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