import React  from 'react';
import './Home.css';
import RecentlyAdded from '../../components/common/RecentlyAdded';
import Featured from '../../components/common/Featured';

import WellCards from './WellCards/WellCards';
import Categories from './Categories/Categories';
import InfoBarCards from './InfoBarCards/InfoBarCards';
import ServicesInfo from './ServicesInfo/ServicesInfo';
import RequestCard from './RequestCard/RequestCard';

const Banner = () => {
    return (
        <img alt='banner' 
        src={require('./../../assets/images/banner.png')} 
        style={{ width:'100%', minHeight: '200px'}} />)
}
const HomeContainer = () => {
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
                            {/* <RecentActivities /> */}

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
export default HomeContainer;