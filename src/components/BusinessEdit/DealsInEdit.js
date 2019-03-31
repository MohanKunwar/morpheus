import React, { Component } from 'react'

export default class DealsInEdit extends Component {
    render() {
        return (
            this.props.tab === 'Deals In'
            ? 
            <div className='business_dealsin_edit'>
                DealsIn
            </div>
            : null
        )
    }
}