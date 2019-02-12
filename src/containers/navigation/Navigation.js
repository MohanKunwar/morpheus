import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// import Requests from './Requests/Requests';
import './Navigation.css';
class Navigation extends Component {
    state = {
        showRequestModal: false
    }
    showRequestModalDialog = () => {
        console.log(document.documentElement.clientWidth);
        this.setState({ showRequestModal: true });
    }
    render() {
        return (
            <nav>
                <div className='card-container'>
                    <div className='nav-area'>
                        <div className='nav-links'>
                            <Link to='/'>
                                Home
                </Link>
                            <Link to='/'>
                                My Activity
                </Link>
                            <Link to='/reviews'>
                                Reviews
                </Link>
                            <Link to='/requirements'>
                                My Requirements
                </Link>
                        </div>
                        <div className='request-btn' onClick={this.showRequestModalDialog}>
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