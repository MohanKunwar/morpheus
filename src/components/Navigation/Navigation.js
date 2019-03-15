import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';

// import Requests from './Requests/Requests';
import './Navigation.css';
class Navigation extends Component {

    render() {
        return (
            <div className="navigation_container">
                <div className='card-container'>
                    <div className='nav-area'>
                        <div className='nav-links'>
                        <ul>
                            <li><NavLink to='/' className="nav-item">Home
                </NavLink></li>
                           <li><NavLink to='/user/account' className="nav-item">My Account
                </NavLink></li>
                            <li><NavLink to='/user/reviews' className="nav-item">Reviews
                </NavLink></li>
                <li><NavLink to='/user/requirements' className="nav-item">
                                My Requirements
                </NavLink></li>
                <li><NavLink to='/business/12' className="nav-item">
                                Business
                </NavLink></li>
                </ul>

                        </div>
                        <div className='request-btn_nav'>
                            <Link to='/user/request'>
                                <span className='request-btn-nav'>Request Product/Service</span>
                            </Link>
                        </div>

                    </div>

                    {/* <Requests
                        show={this.state.showRequestModal} /> */}
                </div>
                </div>
        );
    }
}

export default Navigation;