import React, { Component } from 'react';
import Category from './Category/Category';

class Categories extends Component {
    componentWillMount() {
        console.log('cate', this.props.categories);
    }
    componentWillUnmount() {
        console.log('gories', this.props.categories);
    }
    getCategories = () => {
        return [
            {
                id: 1,
                title: 'title 1',
                subCategories: ['a', 'b', 'c', 'd']
            },
            {
                id: 2,
                title: 'title 1',
                subCategories: ['e', 'f', 'g', 'h']
            },
            {
                id: 3,
                title: 'title 1',
                subCategories: ['i', 'j', 'k', 'l']
            },
            {
                id: 4,
                title: 'title 1',
                subCategories: ['m', 'n', 'o', 'p']
            },
            {
                id: 5,
                title: 'title 1',
                subCategories: ['q', 'r', 's', 't']
            },
            {
                id: 6,
                title: 'title 1',
                subCategories: ['u', 'v', 'w', 'x']
            },
            {
                id: 7,
                title: 'title 1',
                subCategories: ['y', 'b', 'c', 'z']
            },
        ]


    }
    render() {
        const categories = this.getCategories().map(
            category => {
                return (
                    <Category
                        key={category.id}
                        title={category.title}
                        subCategories={category.subCategories} />
                )
            });
        return (
            <div>
                {categories}
            </div>
            // {categories}
            // <p>cate</p>
        )
    }
}

export default Categories;