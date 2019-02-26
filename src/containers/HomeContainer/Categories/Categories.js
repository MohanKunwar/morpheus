import React, { Component } from 'react';
import Category from './Category/Category';
import Axios from '../../../services/Axios'
import './Categories.css';
class Categories extends Component {
    state = {
        categories: [],
    }
    componentWillMount() {
        Axios.instance.get(Axios.API.common.topLevelCategoriesUrl).then(response => {
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