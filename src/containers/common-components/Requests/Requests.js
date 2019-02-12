import React, { Component } from 'react'
import Modal from './../../../UI/Modal/Modal';
import Hoc from './../../../hoc/Hoc';
class Requests extends Component {
    state = {
        backDropType: 'none'
    }
    render() {
        let showRequest = null;
        if (this.props.show) {
            showRequest = (
            <Modal show={this.props.show} backDropType={this.state.backDropType} >
                <Hoc>
                <p>Request form goes here!</p>
                </Hoc>
            </Modal>);
        }
        return showRequest;
    }
}

export default Requests;