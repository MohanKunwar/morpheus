import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
// import Requests from './Requests/Requests';
import './Navigation.css';
class Navigation extends Component {

    render() {
        return (
            <div className="navigation_container">
                <div className='card-container'>
                    <div className='nav-area'>
                        <div className='nav-links'>
                            <NavLink to='/' className="nav-item"><FaHome /></NavLink>
                            <NavLink to='/user/account' className="nav-item">My Account</NavLink>
                            <NavLink to='/user/reviews' className="nav-item">Reviews</NavLink>
                            <NavLink to='/user/requirements' className="nav-item">My Requirements</NavLink>
                            <NavLink to='/business/12' className="nav-item">Business</NavLink>
                        </div>
                        <div className='request_btn'>
                            <Link to='/user/request'>
                                <span className='request-btn-nav'>Request Product/Service</span>
                            </Link>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}

export default Navigation;