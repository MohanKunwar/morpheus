import React, { Component } from 'react';
import './Home.css';
import WellCards from './WellCards/WellCards';
import Categories from './Categories/Categories';
import Featured from './Featured/Featured';
import RecentActivities from './RecentActivities/RecentActivities';
import RecentlyAdded from './RecentlyAdded/RecentlyAdded';
import Banner from './Banner/Banner';

class Home extends Component {

    render() {
        return (
            <div className='home-container'>
                <Banner />
                <div className='card-container'>
                    <div className='home-area'>

                        <WellCards />
                        <div className='page-grid'>
                            <div className='left-grid'>
                                <Categories />
                            </div>
                            <div className='middle-grid'>
                                <Featured />
                                <RecentActivities />
                                <RecentlyAdded />
                            </div>
                            <div className='right-grid'>
                                <p>right-grid</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;