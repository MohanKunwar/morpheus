import React, { Component } from 'react';
import './Backdrop.css';

class backdrop extends Component {

    render() {

        let showBackdrop = null;
        if (this.props.type) {
            switch (this.props.type) {
                case 'img': {
                    showBackdrop = (
                        <div className='shade'>
                            {/* <img src={props.img} /> */}
                        </div>
                    );
                    break;
                }
                case 'shade': {
                    showBackdrop = (
                        <div className='shade'></div>
                        // <div className='shade' onClick={}></div>
                    );
                    break;
                }
                default: {
                    showBackdrop = (
                        <div className='shade'></div>
                    );
                }
            }
        }
        return showBackdrop;
    }
}

export default backdrop;