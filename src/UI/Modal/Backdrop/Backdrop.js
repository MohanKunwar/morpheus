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
                            <img src={this.props.img.src} alt={this.props.img.alt} />
                        </div>
                    );
                    break;
                }
                case 'shade': {
                    showBackdrop = (
                        <div className='shade'>
                        </div>
                    );
                    break;
                }
                default: {
                    showBackdrop = (
                        <div className='sa'></div>
                    );
                }
            }
        }
        return showBackdrop;
    }
}

export default backdrop;