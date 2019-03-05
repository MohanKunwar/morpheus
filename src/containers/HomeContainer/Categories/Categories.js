import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Category from './Category/Category';
import Axios from '../../../services/Axios'
import './Categories.css';
class Categories extends Component {
    state = {
        categories: [],
    }
    componentWillMount() {
        Axios.instance.get(Axios.API.common.topLevelCategoriesUrl).then(response => {
            if (response) {
                this.setState({ categories: response.data.data })
            }
        });
    }
    render() {
        let categories = null;
        if (this.state.categories.length > 0) {
            categories = this.state.categories.map(item => {
                return (
                    <Link to={`/search/business?category=${item.name}`} key={item.id}><Category name={item.name} id={item.id} /></Link>
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