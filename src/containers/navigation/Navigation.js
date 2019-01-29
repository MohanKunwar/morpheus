import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Requests from './../components/Requests/Requests';

class Navigation extends Component {
    state = {
        showRequestModal: false
    }
    showRequestModalDialog = () => {
        this.setState({ showRequestModal: true });
    }
    render() {

        return (
            <nav>
                <div className='card-container'>
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
                    <Button onClick={this.showRequestModalDialog}>
                        Request Product/Service
                </Button>
                    <Requests
                        show={this.state.showRequestModal} />
                </div>
            </nav>
        );
    }
}

export default Navigation;