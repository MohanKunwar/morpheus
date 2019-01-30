import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                {/* <Banner /> */}
                <div>
                    <p>Banner</p>
                </div>
                <div className='card-container'>
                    <div className='home-area'>
                        <div className='well-cards'>
                            <div className='well-card'>
                                <img src=''></img>
                                <span className='well-card-text'>
                                    Hotel Booking
                                    Hotel Booking
                                    Hotel Booking
                                    Hotel Booking
                                </span>
                            </div>
                            <div className='well-card'>
                                <img src=''></img>
                                <span className='well-card-text'>
                                    Food Order
                                </span>
                            </div>
                            <div className='well-card'>
                                <img src=''></img>
                                <span className='well-card-text'>
                                    Facebook Boosting
                                </span>
                            </div>

                        </div>
                        <div className='page-grid'>
                            <div className='left-grid'>
                                {/* <Categories /> */}
                                <p>left grid</p>
                            </div>
                            <div className='middle-grid'>
                            <p>mid grid</p>
                                {/* <Featured />
                             <MostPopular />
                            <RecentActivities />
                            <RecentlyAdded /> */}
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