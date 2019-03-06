import React, {Component} from 'react'
import BusinessCard from './../../../UI/BusinessCard/BusinessCard';
import Carousel from './../../../UI/Carousel/Carousel';

import Axios from '../../../services/Axios';
import './RecentlyAdded.css';
class RecentlyAdded extends Component {
    state = {
        recentlyAddedItems: []
    }
    componentWillMount() {
        // get recently added items 
        Axios.instance.get(Axios.API.common.recentlyAddedUrl).then(response => {
            if (response) {
                this.setState({recentlyAddedItems: response.data.data});
            }
        })
    }

    render() {
        let items = null;
        if (this.state.recentlyAddedItems.length > 0) {
            items = this.state.recentlyAddedItems.map(item => {
                return (
                    <div className='recently-added-item' key={item.id}>
                        <BusinessCard business={item} />
                    </div>
                );
            })
            return (
                <div className='recently-added'>
                <div>Recently Added</div>
                <Carousel items={items} />
                </div>
            )
        } else {
           return  (<div className='recently-added'>
                loading
                </div>)
            // todo
            // <Spinner />
        }
    }
}

export default RecentlyAdded;