import React, { Component } from 'react';
import Category from './Category/Category';

import axios from './../../../axios';
import API from './../../../api';
import './Categories.css';
class Categories extends Component {
    state = {
        categories: [],
    }
    componentWillMount() {
        axios.get(API.common.topLevelCategoriesUrl).then(response => {
            this.setState({ categories: response.data.data });
        });
    }
    render() {
        let categories = null;
        if (this.state.categories.length > 0) {
            categories = this.state.categories.map(item => {
                return (
                    <Category key={item.id} name={item.name} id={item.id} />
                );
            })
        } else {
            // todo
            // categories = <Spinner />
        }

        return (categories)
    }
}

export default Categories;