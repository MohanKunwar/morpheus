import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import Requests from './../../containers/components/Requests/Requests';

class Navigation extends Component {
    showRequestModal = () => {
        return (
            <Requests></Requests>
        );
    }
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
                {/* <Button onClick={this.showRequestModal}>
                    Request Product/Service
                </Button> */}
            </nav>
        );
    }
}

export default Navigation;