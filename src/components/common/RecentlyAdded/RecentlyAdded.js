import React, {Component} from 'react'
import BusinessCard from './../../../UI/BusinessCard/BusinessCard';
import Carousel from './../../../UI/Carousel/Carousel';

import Axios from '../../../services/Axios';
import './RecentlyAdded.css';
import Spinner from '../../../helpers/Spinner';
class RecentlyAdded extends Component {
    state = {
        recentlyAddedItems: null
    }
    componentWillMount() {
        // get recently added items 
        Axios.instance.get(Axios.API.common.recentlyAddedUrl).then(response => {
            if (response && response.data) {
                this.setState({recentlyAddedItems: response.data.data})
            }
        })
    }

    render() {
        let items = null
        if (this.state.recentlyAddedItems) {
            items = this.state.recentlyAddedItems.map(item => {
                return (
                    <div className='recently-added-item' key={item.id}>
                        <BusinessCard business={item} />
                    </div>
                )
            })
        } 
        return (
            <div className='recently-added'>
                <div>Recently Added</div>
        {items ? <Carousel items={items} /> : <Spinner /> }
                </div>
        )
    }
}

export default RecentlyAdded;