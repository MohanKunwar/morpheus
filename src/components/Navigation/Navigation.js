import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { 
    FaHome, 
    FaUser, 
    FaComments, 
    FaShoppingCart, 
    FaBriefcase } from 'react-icons/fa';
// import Requests from './Requests/Requests';
import './Navigation.css';
class Navigation extends Component {

    render() {
        return (
            <div className="navigation_container">
                <div className='card-container'>
                    <div className='nav-area'>
                        <div className='nav-links'>
                            <NavLink to='/home' className="nav-item"><FaHome /><span className="nav_heading"> Home</span></NavLink>
                            <NavLink to='/user/account' className="nav-item"><FaUser /><span className="nav_heading"> My Account</span></NavLink>
                            <NavLink to='/user/reviews' className="nav-item"><FaComments /><span className="nav_heading"> Reviews</span></NavLink>
                            <NavLink to='/user/requirements' className="nav-item"><FaShoppingCart /><span className="nav_heading"> My Requirements</span></NavLink>
                            <NavLink to='/business/12' className="nav-item"><FaBriefcase /><span className="nav_heading"> Business</span></NavLink>
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