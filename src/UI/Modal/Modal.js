import React from 'react';
import Backdrop from './Backdrop/Backdrop';
import './Modal.css';

const Modal = (props) => {
    let modal = null;
    if (props.show && !props.hide) {
        modal = (
            <div>
                <Backdrop
                    type={props.backDropType}
                    img={props.img}
                />
                <div className='modal-container'>
                    {props.children}
                </div>
            </div>
        )
        console.log('display', props.children);
        return (modal);
    }
}

export default Modal;