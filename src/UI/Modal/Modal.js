import React, {Component} from 'react';
import Backdrop from './../Backdrop/Backdrop';
import Hoc from './../../hoc/Hoc';
import './Modal.css';

class Modal extends Component {
    render() {
        console.log('display', this.props.children);
        return (
            <Hoc>
                <Backdrop show={this.props.show} type={this.props.backDropType} />
                <div className='modal-container' style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Hoc>

        )
    }
}

export default Modal;