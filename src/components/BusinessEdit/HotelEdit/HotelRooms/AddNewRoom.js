import React, { Component } from 'react'
import KhozModal from '../../../../UI/KhozModal'

class AddNewRoom extends Component {
    state = {
        showModal: false
    }
    toggleModal = (open) => {
        if (open) {
            this.setState({ showModal: true })
        } else {
            this.setState({ showModal: false })
        }
    }

    render() {
        return (
            <React.Fragment>
                <button aria-label="show modal" onClick={() => this.toggleModal(true)} >Show Modal</button>
                    <KhozModal
                        toggleModal={this.toggleModal}
                        showModal={this.state.showModal}
                        title='Add New Room'
                    >
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>

          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
                        dolor iste amet error natus in quos harum eligendi perspiciatis cum,
                        qui quisquam vero rem perferendis eius, reiciendis assumenda enim
          repellat.</span>
                    </KhozModal>
            </React.Fragment>
        )
    }
}
export default AddNewRoom
