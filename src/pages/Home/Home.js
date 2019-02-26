import React, { Component } from 'react';
import './Home.css';
import WellCards from './WellCards/WellCards';
import Categories from './Categories/Categories';
import Featured from './Featured/Featured';
import RecentActivities from './RecentActivities/RecentActivities';
import RecentlyAdded from './RecentlyAdded/RecentlyAdded';
import Banner from './Banner/Banner';
import InfoBarCards from './InfoBarCards/InfoBarCards';
import ServicesInfo from './ServicesInfo/ServicesInfo';
import RequestCard from './RequestCard/RequestCard';
class Home extends Component {

    render() {
        return (
            <div className='home-container'>
                <Banner />
                <div className='card-container'>
                    <div className='home-area'>

                        <WellCards />
                        <div className='page-grid'>
                            <div className='left-grid-mobile'>
                                <p>mobile text for categories</p>
                            </div>
                            <div className='left-grid'>
                                <Categories />
                                <RequestCard />
                            </div>
                            <div className='middle-grid'>
                                <Featured />
                                <RecentActivities />
                                <RecentlyAdded />
                            </div>
                            <div className='right-grid'>
                                <InfoBarCards hotelBooked='345' foodOrdered='2345' servicesRequested='6543' />
                                <ServicesInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;