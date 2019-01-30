import React, { Component } from 'react';
import Backdrop from './../Backdrop/Backdrop';
import Hoc from './../../hoc/Hoc';
import './Modal.css';

class Modal extends Component {
    render() {
        let modal = null;
        if (this.props.show) {
            modal = (
                <Hoc>
                <Backdrop show={this.props.show} type={this.props.backDropType} />
                <div className='modal-container' 
                // style={{
                //     // transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                //     // opacity: this.props.show ? '1' : '0'

                //     transform: 'translateY(0)',
                //     opacity: '1'
                // }}
                >
                    {this.props.children}
                </div>
            </Hoc>

            )
        }
        console.log('display', this.props.children);
        return (modal);
    }
}

export default Modal;