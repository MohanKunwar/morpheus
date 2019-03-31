import React, { Component } from 'react'

export default class OverviewEdit extends Component {
    render() {
        return (
            this.props.tab === 'Overview'
            ? 
            <div className='business_overview_edit'>
                overview
            </div>
            : null
        )
    }
}