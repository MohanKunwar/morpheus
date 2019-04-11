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
import Banner from './Banner/Banner';
import axios from 'axios'

class HomeContainer extends Component {

    signal = axios.CancelToken.source()
    state = {
        featuredItems: null,
        recentlyAddedItems: null,
        banners: null
    }
    componentWillMount() {
        Axios.instance.get(Axios.API.common.featuredUrl, { cancelToken: this.signal.token }).then(response => {
            if (response && response.data) {
                this.setState({ featuredItems: response.data.data })
            }
        })
        Axios.instance.get(Axios.API.common.recentlyAddedUrl, { cancelToken: this.signal.token }).then(response => {
            if (response && response.data) {
                this.setState({ recentlyAddedItems: response.data.data })
            }
        })
        Axios.instance.get(Axios.API.common.getBannersUrl, { cancelToken: this.signal.token }).then(response => {
            if (response && response.data) {
                this.setState({ banners: response.data.data })
            }
        })
    }

    render() {
        document.title = `Khoz-Decision with Precision`
        return (
            this.state.featuredItems && this.state.recentlyAddedItems && this.state.banners
                ?
                (<div className='home-container'>
                    <Banner banners={this.state.banners} />
                    <div className='card-container'>
                        <WellCards />
                        <div className='page-grid'>
                            <div className='left-grid'>
                                <Categories />
                                <RequestCard />
                            </div>
                            <div className='middle-grid'>
                                <FilteredBusinesses title='Featured' items={this.state.featuredItems} />
                                <FilteredBusinesses title='Recently Added' items={this.state.recentlyAddedItems} />
                            </div>
                            <div className='right-grid'>
                                <InfoBarCards hotelBooked='345' foodOrdered='2345' servicesRequested='6543' />
                                <ServicesInfo />
                            </div>
                        </div>
                    </div>
                </div>)
                : <Spinner />
        )
    }

    componentWillUnmount() {
        this.signal.cancel({
            response: 'home call apis cancelled'
        })
    }

}
export default HomeContainer;
