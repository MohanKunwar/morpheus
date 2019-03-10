import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category/Category';
import Axios from '../../../services/Axios'
import './Categories.css';
import Spinner from '../../../components/common/Spinner';

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
                    <Link to={`/search/business?category=${item.slug.trim()}`} key={item.id} className="sidenav-categories">
                        <Category name={item.name} id={item.id} />
                    </Link>
                );
            })
        } else {
            categories = <Spinner />
        }

        return (categories)
    }
}

export default Categories;