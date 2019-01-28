import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav>
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
                <Link to='/request'>
                    Request Product/Service
                </Link>
            </nav>
        );
    }
}

export default Navigation;