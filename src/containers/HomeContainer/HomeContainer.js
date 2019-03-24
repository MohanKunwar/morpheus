import React, { Component } from 'react';
import './Home.css';
import FilteredBusinesses from '../../components/common/FilteredBusinesses';

import WellCards from './WellCards/WellCards';
import Categories from './Categories/Categories';
import InfoBarCards from './InfoBarCards/InfoBarCards';
import ServicesInfo from './ServicesInfo/ServicesInfo';
import RequestCard from './RequestCard/RequestCard';
import Axios from '../../services/Axios';
import Spinner from '../../helpers/Spinner';
import RoomCard from '../../UI/RoomCard/RoomCard';

const Banner = () => {
    return (
        <img alt='banner'
            src={require('./../../assets/images/banner.png')}
            style={{ width: '100%', minHeight: '200px' }} />)
}
class HomeContainer extends Component {
    state = {
        featuredItems: null,
        recentlyAddedItems: null
    }
    componentWillMount() {
        Axios.instance.get(Axios.API.common.featuredUrl).then(response => {
            if (response && response.data) {
                this.setState({ featuredItems: response.data.data })
            }
        })
        Axios.instance.get(Axios.API.common.recentlyAddedUrl).then(response => {
            if (response && response.data) {
                this.setState({ recentlyAddedItems: response.data.data })
            }
        })
    }

    render() {
        return (
            this.state.featuredItems && this.state.recentlyAddedItems
                ?
                (<div className='home-container'>
                    <Banner />
                    <div className='card-container'>
                        <div className='home-area'>

                            <WellCards />
                            <div className='page-grid'>
                                <div className='left-grid-mobile'>
                                    <p>mobile text for categories</p>
                                </div>
                                <div className='left-grid'>
                                    <div className="categories-container">
                                        <Categories />
                                    </div>
                                    <RequestCard />
                                </div>
                                <div className='middle-grid'>
                                    <FilteredBusinesses title='Featured' items={this.state.featuredItems} />
                                    <FilteredBusinesses title='Recently Added' items={this.state.recentlyAddedItems} />
                                    <RoomCard />
                                </div>
                                <div className='right-grid'>
                                    <InfoBarCards hotelBooked='345' foodOrdered='2345' servicesRequested='6543' />
                                    <ServicesInfo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
                : <Spinner />
        )
    }


}
export default HomeContainer;