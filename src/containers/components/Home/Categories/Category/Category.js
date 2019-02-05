import React, { Component } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import './Category.css';
class Category extends Component {

    render() {
        // const subcategories = this.props.subCategories.map(
        //     subCategory => {
        //         return (<span>{subCategory}</span>)
        //     });
        return (
            <div className='category-btn'>
                {/* <OverlayTrigger trigger='click' key={this.props.id}
                    overlay={
                        <Popover id="popover-basic">
                        <p>abc</p>
                            {this.props.subcategories}
                        </Popover>
                    }>
                    <span key={this.props.id}>{this.props.title}</span>
                </OverlayTrigger> */}
            </div>
        );
    }
}
export default Category;