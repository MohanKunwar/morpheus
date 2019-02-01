import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='card-container'>
                    <div className='footer-area'>
                        <div className='footer-khozinfo'>
                            <p>khozinfo</p>
                        </div>
                        <div className='footer-navigate'>
                            <p>navigate</p>
                        </div>
                        <div className='footer-contacts'>
                            <p>contacts</p>
                        </div>
                        <div className='footer-app-links'>
                            <p>app links</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;