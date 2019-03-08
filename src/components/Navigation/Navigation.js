import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// import Requests from './Requests/Requests';
import './Navigation.css';
class Navigation extends Component {
  
    render() {
        return (
                <nav>
                    <div className='card-container'>
                        <div className='nav-area'>
                            <div className='nav-links'>
                                <Link to='/'>Home
                </Link>
                                <Link to='/'>My Activity
                </Link>
                                <Link to='/user/reviews'>Reviews
                </Link>
                                <Link to='/user/requirements'>
                                    My Requirements
                </Link>
                                <Link to='/business/12'>
                                    Business
                </Link>


                            </div>
                            <div className='request-btn'>
                                <span className='request-btn-text'>Request Product/Service</span>
                            </div>

                        </div>

                        {/* <Requests
                        show={this.state.showRequestModal} /> */}
                    </div>
                </nav>
        );
    }
}

export default Navigation;