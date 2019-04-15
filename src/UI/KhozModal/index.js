import React, { Component } from 'react';
import './KhozModal.css'
class KhozModal extends Component {
  render() {
    const { 
      toggleModal, 
      showModal,
      title,
      children} = this.props;
    
    return (
        <div className={`modal_wrapper ${showModal ? 'show': 'hide'}`}>
          <div className='modal'>
          <div className='modal-header'>
            <h2  className='title'>
              { title }
            </h2>
            <span className='btn-close' onClick={() => toggleModal(false)}>
              close
            </span>
          </div>
          <div className='modal-body'>
            { children }
          </div>
        </div>
        </div>
    );
  }
}

export default KhozModal;
